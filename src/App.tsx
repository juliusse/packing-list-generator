import React, { useEffect, useState } from "react";
import "./App.scss";
import { Configuration, Activity } from "./types/configuration";
import { Config } from "./components/Config/Config";
import { Header } from "./components/Header/Header";
import { PackingListItem as Item } from "@/types/packing-list-item";
import { PackingListItem } from "@/components/PackingListItem/PackingListItem";

const App = ({ activities }: { activities: Activity[] }) => {
  const [showConfig, setShowConfig] = useState<boolean>(true);
  const [selectedActivities, setSelectedActivities] = useState<string[]>(["Basics"]);
  const [numberOfDays, setNumberOfDays] = useState<number>(7);
  const [title, setTitle] = useState<string>("Packing List Generator");
  const [itemGroups, setItemGroups] = useState<Map<string, Map<string, Item>>>(new Map());

  const handleItemRemove = (category: string, item: string) => {
    itemGroups.get(category)?.delete(item);
    console.log(category, item);
    setItemGroups(new Map(itemGroups));
  };

  useEffect(() => {
    function onKeyDown(e: { key: string }) {
      if (e.key === "c") {
        setShowConfig(true);
      }
      if (e.key === "v") {
        setShowConfig(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const itemGroups: Map<string, Map<string, Item>> = new Map();

    selectedActivities.forEach((c) => {
      const categoryItems = (activities.find((c2) => c2.name == c) as Activity)?.items;

      categoryItems?.forEach((item) => {
        const group = item.itemCategory;
        if (!itemGroups.has(group)) {
          itemGroups.set(group, new Map());
        }

        const itemGroup = itemGroups.get(group);

        let amount: number | undefined = undefined;
        switch (item.type) {
          case "FIX":
            amount = item.amount || undefined;
            break;
          case "PER_DAY":
            amount = Math.ceil((item.amount || 1) * numberOfDays);
            break;
          case "NO_AMOUNT":
            amount = undefined;
        }

        itemGroup?.set(item.name, { ...item, amount });
      });
    });

    itemGroups.forEach((value, key) => {
      itemGroups.set(key, new Map([...value.entries()].sort()));
    });
    setItemGroups(itemGroups);
    console.log(itemGroups);
  }, [selectedActivities, numberOfDays]);

  return (
    <div className="app">
      <Header title={title} numberOfDays={numberOfDays} itemGroups={itemGroups} />
      {showConfig && (
        <Config
          activities={activities}
          title={title}
          numberOfDays={numberOfDays}
          selectedActivities={selectedActivities}
          onDaysChanged={(days) => setNumberOfDays(days)}
          onTitleChanged={(title) => setTitle(title)}
          onActivitiesChanged={(activities) => setSelectedActivities(activities)}
        />
      )}
      <div className="packing-list">
        {[...itemGroups].map(([title, items]) => {
          let groupTotalWeight = 0;
          items.forEach((props) => {
            const amount = props.amount || 1;
            if (props.weight) {
              groupTotalWeight += props.weight * amount;
            }
          });

          return (
            <div key={title} className="packing-list-category">
              <div className="packing-list-category-title">
                <div className="name">{title}</div>
                <div className="weight">{`${groupTotalWeight}g`}</div>
                <div className="checkbox"></div>
              </div>
              {[...items.values()]
                .sort((i1, i2) => i1.order - i2.order)
                .map((item, index) => {
                  const bgColor = index % 2 === 0 ? "#fff" : "#eee";
                  return (
                    <PackingListItem
                      key={`${title}-${item.name}`}
                      groupTitle={title}
                      item={item}
                      bgColor={bgColor}
                      onRemove={handleItemRemove}
                      showDeleteButton={showConfig}
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
