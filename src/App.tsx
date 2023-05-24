import React, { useEffect, useState } from "react";
import "./App.scss";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import config, { Item } from "./Config";

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
  const [categories, setCategories] = useState<string[]>([]);
  const [showConfiguration, setShowConfiguration] = useState<boolean>(true);

  const [itemGroups, setItemGroups] = useState<Map<string, Map<string, number | null>>>(new Map());
  const configChunks = chunkArray(config, 4);
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumDays(event.target.value);
  };

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

  const handleShowConfigurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowConfiguration(event.target.checked);
  };

  useEffect(() => {
    const itemGroups: Map<string, Map<string, number | null>> = new Map();

    categories.forEach((c) => {
      const categoryItems = config.find((c2) => c2.name == c)?.items;

      categoryItems?.forEach((item) => {
        const group = item.itemCategory;
        if (!itemGroups.has(group)) {
          itemGroups.set(group, new Map());
        }

        const itemGroup = itemGroups.get(group);
        if (itemGroup?.has(item.name)) {
          // TODO
        } else {
          let amount: number | null = null;
          switch (item.type) {
            case "FIX":
              amount = item.amount || null;
              break;
            case "PER_DAY":
              amount = Math.ceil((item.amount || 1) * Number.parseInt(numDays));
              break;
            case "NO_AMOUNT":
              amount = null;
          }

          itemGroup?.set(item.name, amount);
        }
      });
    });
    setItemGroups(itemGroups);
    console.log(itemGroups);
  }, [categories, numDays]);

  return (
    <div className="app">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            Packing List Generator &nbsp;
            <input
              type="checkbox"
              checked={showConfiguration}
              onChange={handleShowConfigurationChange}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      {showConfiguration && (
        <Container className="configuration" style={{ paddingTop: "10px" }}>
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
          return (
            <div key={title} className="packing-list-category">
              <div className="packing-list-category-title">{title}</div>
              {[...items].map(([itemTitle, amount], index) => {
                const alternatingClass = index % 2 === 0 ? "even" : "uneven";
                return (
                  <div
                    key={`${title}-${itemTitle}`}
                    className={`packing-list-category-item ${alternatingClass}`}
                  >
                    <div className="name">
                      {amount && `${amount} x `}
                      {itemTitle}
                    </div>
                    <div className="checkbox"></div>
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
