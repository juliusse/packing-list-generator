import React, { useEffect, useState } from "react";
import "./App.scss";
import { Configuration, ConfigurationCategory } from "./types/configuration";
import { Config } from "./components/Config/Config";
import { Header } from "./components/Header/Header";
import { PackingListItem as Item } from "@/types/packing-list-item";
import { PackingListItem } from "@/components/PackingListItem/PackingListItem";

declare global {
  interface Window {
    config: ConfigurationCategory[];
  }
}

const App: React.FC = () => {
  const [config, setConfig] = useState<Configuration>({
    allCategories: window.config,
    numberOfDays: 7,
    selectedCategories: ["Basics"],
    title: "Packing List Generator",
    showConfiguration: true,
  });

  const [itemGroups, setItemGroups] = useState<Map<string, Map<string, Item>>>(new Map());

  const handleConfigChange = (config: Configuration) => {
    setConfig({ ...config });
  };

  const handleItemRemove = (category: string, item: string) => {
    itemGroups.get(category)?.delete(item);
    console.log(category, item);
    setItemGroups(new Map(itemGroups));
  };

  useEffect(() => {
    const itemGroups: Map<string, Map<string, Item>> = new Map();

    config.selectedCategories.forEach((c) => {
      const categoryItems = (config.allCategories.find((c2) => c2.name == c) as ConfigurationCategory)?.items;

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
            amount = Math.ceil((item.amount || 1) * config.numberOfDays);
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
  }, [config]);

  return (
    <div className="app">
      <Header config={config} itemGroups={itemGroups} />
      <Config initialConfig={config} onConfigChanged={handleConfigChange} />
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
                      config={config}
                      groupTitle={title}
                      item={item}
                      bgColor={bgColor}
                      onRemove={handleItemRemove}
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
