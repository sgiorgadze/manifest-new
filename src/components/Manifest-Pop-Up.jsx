import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataById } from "../services/data-services";

const ManifestPopUp = () => {
  const { id } = useParams();
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    const d = getDataById(+id);
    setSelectedData(d);
  }, [id]);

  return (
    <div id="manifest-popup">
      <div>
        <p id="manifest-popup-title">{selectedData.title}</p>
        <p id="manifest-popup-text" style={{ height: "1307px" }}>
          {selectedData.description}
        </p>
      </div>
      <div id="draggable"></div>
    </div>
  );
};

export default ManifestPopUp;
