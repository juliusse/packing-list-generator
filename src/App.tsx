import React, { useEffect, useState } from "react";
import "./App.scss";
import { Col, Container, Navbar, Row } from "react-bootstrap";

export type Item = {
  order: number;
  itemCategory: string;
  name: string;
  weight?: number;
  amount?: number;
  type: "FIX" | "PER_DAY" | "NO_AMOUNT";
};

export type ItemProperties = {
  order: number;
  name: string;
  weight?: number;
  amount?: number;
};

export type Category = {
  name: string;
  items: Item[];
};

declare global {
  interface Window {
    config: Category[];
  }
}

const config = window.config;

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return chunks;
}

const App: React.FC = () => {
  const [numDays, setNumDays] = useState("7");
  const [categories, setCategories] = useState<string[]>(["Basics"]);
  const [showConfiguration, setShowConfiguration] = useState<boolean>(true);
  const [title, setTitle] = useState("Packing List Generator");

  const [itemGroups, setItemGroups] = useState<Map<string, Map<string, ItemProperties>>>(new Map());
  const configChunks = chunkArray(config, 4);
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumDays(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    function onKeyDown(e: { key: string }) {
      if (e.key === "c") {
        setShowConfiguration(true);
      }
      if (e.key === "v") {
        setShowConfiguration(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleCategoryChange = (categoryName: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      let newCategories: string[];
      if (event.target.checked) {
        categories.push(categoryName);
        newCategories = [...categories];
      } else {
        newCategories = categories.filter((c) => c != categoryName);
      }
      setCategories(newCategories);
      console.log(newCategories);
    };
  };

  const handleItemClick = (category: string, item: string) => {
    itemGroups.get(category)?.delete(item);
    console.log(category, item);
    setItemGroups(new Map(itemGroups));
  };

  const calculateTotalWeight = () => {
    let totalWeight = 0;
    itemGroups.forEach((itemGroup) => {
      itemGroup.forEach((properties) => {
        const amount = properties.amount || 1;
        if (properties.weight) {
          totalWeight += properties.weight * amount;
        }
      });
    });
    return totalWeight;
  };

  useEffect(() => {
    const itemGroups: Map<string, Map<string, ItemProperties>> = new Map();

    categories.forEach((c) => {
      const categoryItems = (config.find((c2) => c2.name == c) as Category)?.items;

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
            amount = Math.ceil((item.amount || 1) * Number.parseInt(numDays));
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
  }, [categories, numDays]);

  return (
    <div className="app">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            {title} - {numDays} Tage - {calculateTotalWeight()}g
          </Navbar.Brand>
        </Container>
      </Navbar>
      {showConfiguration && (
        <Container className="configuration" style={{ paddingTop: "10px" }}>
          <Row>
            <Col>
              Title: <input type="text" hidden={!showConfiguration} value={title} onChange={handleTitleChange} />
            </Col>
          </Row>
          <Row>
            <Col>
              How many days? <input type="number" value={numDays} onChange={handleDayChange} />
            </Col>
          </Row>
          {configChunks.map((elements, index) => {
            return (
              <Row key={`configRow-${index}`}>
                {elements.map((element) => {
                  return (
                    <Col key={`category-${element.name}`}>
                      <input
                        id={`category-${element.name}`}
                        type="checkbox"
                        checked={categories.includes(element.name)}
                        onChange={handleCategoryChange(element.name)}
                      />
                      &nbsp;<label htmlFor={`category-${element.name}`}>{element.name}</label>
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </Container>
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
                .map((itemProperties, index) => {
                  const alternatingClass = index % 2 === 0 ? "even" : "uneven";
                  return (
                    <div
                      key={`${title}-${itemProperties.name}`}
                      className={`packing-list-category-item ${alternatingClass}`}
                    >
                      <div className="name">
                        {itemProperties.amount && `${itemProperties.amount} x `}
                        {itemProperties.name}
                      </div>
                      <div className="weight">
                        {itemProperties.weight && `${itemProperties.weight * (itemProperties.amount || 1)}g`}
                      </div>
                      <div className="checkbox">
                        {showConfiguration && (
                          <span className="link" onClick={() => handleItemClick(title, itemProperties.name)}>
                            X
                          </span>
                        )}
                      </div>
                    </div>
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
