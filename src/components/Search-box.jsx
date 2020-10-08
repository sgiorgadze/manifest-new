import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const history = useHistory();
  const handleValue = (e) => {
    setValue(e);
    history.push(`/manifest/filter/${value}`);
  };

  // useEffect(() => {
  //   history.push(`/manifest/filter/${value}`);
  // }, [value]);
  return (
    <div className="search-sec">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => handleValue(e.target.value)}
      />
      <ul className="search-result"></ul>
    </div>
  );
};

export default SearchBox;
