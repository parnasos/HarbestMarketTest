import React from "react";

const Filter_name = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Nombre del producto buscado:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};
export default Filter_name;
