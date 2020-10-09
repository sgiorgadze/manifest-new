import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { filterDataByTitle } from "../services/data-services";

const Text = () => {
      const {filter, id} = useParams();

      const [filteredList, setFilteredList] = useState([]);

//      useEffect(() => {
//          console.log(filter)
//     // setFilteredLis(filterDataByTitle(filter));
//   })[filteredList];

useEffect(()=>{
    setFilteredList(filterDataByTitle(filter))

    // const t = filterDataByTitle(filter);
    // console.log(t, filteredList);
    // setFilteredList(1,2,3);
    // console.log(filteredList)

},[id]);

return (
    <>

{filteredList.map(item =><div key={item} id="manifest-popup-text">

      <div>
        <p id="manifest-popup-title">{item.title}</p>
        <p id="manifest-popup-text" style={{ height: "1307px" }}>
          {item.description}
        </p>
      </div>
      <div id="draggable"></div>
    </div>)}
</>



);
}
 
export default Text;