import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { Configuration } from "@/types/configuration";
import "./config.scss";

export interface ConfigOpts {
  config: Configuration;
  onConfigChanged: (config: Configuration) => void;
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return chunks;
}

export const Config = ({ config, onConfigChanged }: ConfigOpts) => {
  const configChunks = chunkArray(config.allCategories, 4);

  console.log(config);

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    config.numberOfDays = event.target.valueAsNumber;
    onConfigChanged(config);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    config.title = event.target.value;
    onConfigChanged(config);
  };

  const handleCategoryChange = (categoryName: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      let newCategories: string[];
      if (event.target.checked) {
        config.selectedCategories.push(categoryName);
        newCategories = [...config.selectedCategories];
      } else {
        newCategories = config.selectedCategories.filter((c) => c != categoryName);
      }
      config.selectedCategories = newCategories;
      onConfigChanged(config);
      console.log(newCategories);
    };
  };

  useEffect(() => {
    function onKeyDown(e: { key: string }) {
      if (e.key === "c") {
        config.showConfiguration = true;
        onConfigChanged(config);
      }
      if (e.key === "v") {
        config.showConfiguration = false;
        onConfigChanged(config);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Container hidden={!config.showConfiguration} className="configuration" style={{ paddingTop: "10px" }}>
      <Row>
        <Col>
          Title: <input type="text" value={config.title} onChange={handleTitleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          How many days? <input type="number" value={config.numberOfDays} onChange={handleDayChange} />
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
                    checked={config.selectedCategories.includes(element.name)}
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
  );
};
