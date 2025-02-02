import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Activity, Configuration } from "@/types/configuration";
import "./config.scss";

export interface ConfigOpts {
  activities: Activity[];
  title: string;
  numberOfDays: number;
  selectedActivities: string[];
  onDaysChanged: (days: number) => void;
  onTitleChanged: (title: string) => void;
  onActivitiesChanged: (activities: string[]) => void;
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

export const Config = ({
  activities,
  title,
  numberOfDays,
  selectedActivities,
  onDaysChanged,
  onTitleChanged,
  onActivitiesChanged,
}: ConfigOpts) => {
  const configChunks = chunkArray(activities, 4);

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDaysChanged(event.target.valueAsNumber);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTitleChanged(event.target.value);
  };

  const handleCategoryChange = (categoryName: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      let newCategories: string[];
      if (event.target.checked) {
        selectedActivities.push(categoryName);
        newCategories = [...selectedActivities];
      } else {
        newCategories = selectedActivities.filter((c) => c != categoryName);
      }
      onActivitiesChanged(newCategories);
    };
  };

  return (
    <Container className="configuration" style={{ paddingTop: "10px" }}>
      <Row>
        <Col>
          Title: <input type="text" value={title} onChange={handleTitleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          How many days? <input type="number" value={numberOfDays} onChange={handleDayChange} />
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
                    checked={selectedActivities.includes(element.name)}
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
