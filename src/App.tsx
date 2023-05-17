import React, { useState } from "react";
import "./App.scss";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import config from "./Config";

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
  let [categories, setCategories] = useState<Set<string>>(new Set());

  const configChunks = chunkArray(config, 4);
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumDays(event.target.value);
  };

  const handleCategoryChange = (categoryName: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {

      if(event.target.checked) {
        categories.add(categoryName);
      } else {
        categories.delete(categoryName);
      }
      setCategories(categories);
    }
  };

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
                    <input type="checkbox" onChange={handleCategoryChange(element.name)} /> {element.name}
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default App;
