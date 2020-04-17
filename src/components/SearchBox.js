import React from "react";

import "./SearchBox.css";

const SearchBox = (props) => {
  const { getSearchField } = props;
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue mb4"
        type="search"
        placeholder="Search Robots"
        onChange={getSearchField}
      ></input>
    </div>
  );
};

export default SearchBox;
