import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { filterDataByTitle } from "../services/data-services";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const[filteredData, SetFilteredData]= useState([]);

  
  const history = useHistory();

const handlefilterData=(d)=>{
  SetFilteredData(filterDataByTitle(d));
};

  
  const handleValue = (e) => {
    setValue(e);
    // console.log(value); // change later
    history.push(`/manifest/filter/${e}`);
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
        onChange={(e) => {handleValue(e.target.value); handlefilterData(e.target.value)}}
      />
      <ul className="search-result">
  {filteredData.map(LiItem => <Link  to ={`/manifest/filter/${LiItem.title}/${LiItem.id}`} key={LiItem.id}>{LiItem.title}</Link>)}
      </ul>
    </div>
  );
};

export default SearchBox;
