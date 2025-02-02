import { Container, Navbar } from "react-bootstrap";
import React from "react";
import { Configuration } from "@/types/configuration";
import { PackingListItem } from "@/types/packing-list-item";

export interface HeaderOpts {
  title: string;
  numberOfDays: number;
  itemGroups: Map<string, Map<string, PackingListItem>>;
}

export const Header = ({ title, numberOfDays, itemGroups }: HeaderOpts) => {
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
          {title} - {numberOfDays} Tage - {calculateTotalWeight()}g
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
