import React from "react";

const FilterGroup = ({
  items,
  textProperty,
  valueProperty,
  handleItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(i => (
        <li
          key={i[valueProperty]}
          className={
            i === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => handleItemSelect(i)}
          style={{ cursor: "pointer" }}
        >
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
