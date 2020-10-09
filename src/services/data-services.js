import data from "../data.json";

export function getData() {
  return data;
}

export function getDataById(id) {
  return data.find((d) => d.id === id);
}

export function filterDataByTitle(filter) {
return  data.filter((t)=>t.title.includes(filter));


  // return data.filter((t) => t.title.contains(filter));
};