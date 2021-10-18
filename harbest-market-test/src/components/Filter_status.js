import React from "react";

const FilterStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "status",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="status">
        Disponibilidad:
      </label>

      <select
        className="form__input status"
        name="status"
        id="status"
        value={props.filterStatus}
        onChange={handleChange}
      >
        <option value="">Todos</option>
        <option value="en stock">En stock</option>
      </select>
    </>
  );
};

export default FilterStatus;
