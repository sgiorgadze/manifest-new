import React from "react";
import { useHistory } from "react-router-dom";

const ManifestList = ({ data }) => {
  const history = useHistory();
  const handleLiClick = (linkPath) => {
    history.push(linkPath);
  };
  return (
    <ul id="manifest-list">
      {data.map((d) => (
        <li
          onClick={() => handleLiClick(`/manifest/${d.id}`)}
          key={d.id}
          className="manifest-item"
        >
          <span className="manifest-date">{d.year} </span>
          <span className="manifest-title">{d.title}</span>
          <span className="manifest-id">{d.number}</span>
        </li>
      ))}
    </ul>
  );
};

export default ManifestList;
