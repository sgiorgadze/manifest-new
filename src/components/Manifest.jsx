import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./SideBar";
import ManifestList from "./Manifest-List";
import ManifestPopUp from "./Manifest-Pop-Up";
import "./style.scss";

import { getData } from "../services/data-services";

import SearchBox from "./Search-box";

const Manifest = () => {
  const [data, setData] = useState([]);
  const [searchBox, setSearSearchBox] = useState(false);

  const handleSearchBox = () => {
    setSearSearchBox(!searchBox);
  };

  useEffect(() => {
    setData(getData());
  }, [data]);

  return (
    <div className="manifest">
      <div className="page-wrapper">
        <SideBar onSelectSearchBox={handleSearchBox} />
        <div className="main-container">
          <Switch>
            <Route path="/manifest/filter"></Route>
            <Route path="/manifest/:id">
              <ManifestPopUp />
            </Route>
            <Route path="/manifest">
              <ManifestList data={data} />
            </Route>
          </Switch>
        </div>
        {searchBox && <SearchBox />}
      </div>
    </div>
  );
};

export default Manifest;
