import React from "react";
import Filter_name from "./Filter_name";

import Filter_status from "./Filter_status";

const Filter = (props) => {
  return (
    <section>
      <form className="form">
        <Filter_name
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />

        <Filter_status
          handleFilter={props.handleFilter}
          filterStatus={props.filterStatus}
        />
      </form>
    </section>
  );
};

export default Filter;
