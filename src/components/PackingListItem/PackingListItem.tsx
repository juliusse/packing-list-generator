import React from "react";
import { PackingListItem as Item } from "@/types/packing-list-item";
import { Configuration } from "@/types/configuration";
import "./PackingListItem.scss";

export interface PackingListItemOpts {
  groupTitle: string;
  item: Item;
  config: Configuration;
  bgColor: string;
  onRemove: (groupName: string, itemName: string) => void;
}

export const PackingListItem = ({ config, groupTitle, item, bgColor, onRemove }: PackingListItemOpts) => {
  const DeleteButton = () => {
    return (
      <>
        {config.showConfiguration && (
          <span className="link" onClick={() => onRemove(groupTitle, item.name)}>
            X
          </span>
        )}
      </>
    );
  };

  return (
    <div className={"packing-list-category-item"} style={{ backgroundColor: bgColor }}>
      <div className="name">
        {item.amount && `${item.amount} x `}
        {item.name}
      </div>
      <div className="weight">{item.weight && `${item.weight * (item.amount || 1)}g`}</div>
      <div className="checkbox">
        <DeleteButton />
      </div>
    </div>
  );
};
