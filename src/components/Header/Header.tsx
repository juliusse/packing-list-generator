import { Container, Navbar } from "react-bootstrap";
import React from "react";
import { PackingListConfig } from "../../types/packing-list-config";
import { ItemProperties } from "../../App";

export interface HeaderOpts {
  config: PackingListConfig;
  itemGroups: Map<string, Map<string, ItemProperties>>;
}

export const Header = ({ config, itemGroups }: HeaderOpts) => {
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

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">
          {config.title} - {config.numberOfDays} Tage - {calculateTotalWeight()}g
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
