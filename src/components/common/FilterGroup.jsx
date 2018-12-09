import React from "react";

const FilterGroup = props => {
  const { items, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map(i => (
        <li key={i[valueProperty]} className={"list-group-item"}>
          {i[textProperty]}
        </li>
      ))}
    </ul>
  );
};

FilterGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default FilterGroup;
