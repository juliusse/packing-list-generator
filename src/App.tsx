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
  let [numDays, setNumDays] = useState("7");
  let [categories, setCategories] = useState<string[]>([]);
  let [items, setItems] = useState<Set<Item>>(new Set());

  const configChunks = chunkArray(config, 4);
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumDays(event.target.value);
  };

  const handleCategoryChange = (categoryName: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        categories.push(categoryName)
        categories = [...categories];
      } else {
        categories = categories.filter(c => c != categoryName);
      }
      setCategories(categories);
      console.log(categories);
    };
  };

  useEffect(() => {
    const newItems = new Set<Item>();
    categories.forEach(c => {
      const categoryItems = config.find(c2 => c2.name == c)?.items;
      // @ts-ignore
      categoryItems?.forEach(i => newItems.add(i));
    })
    setItems(newItems);
    console.log(newItems);
  }, [categories]);

  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Packing List Generator</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="configuration" style={{ paddingTop: "10px" }}>
        <Row>
          <Col>
            How many days? <input value={numDays} onChange={handleDayChange} />
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
      <Container>
      {[...items].map((item) => {
        return (
        <Row key={item.name}>
          {item.name}: {item.amount}
        </Row>
        );
      })}
      </Container>
    </div>
  );
};

export default App;
