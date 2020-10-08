import data from "../data.json";

export function getData() {
  return data;
}

export function getDataById(id) {
  return data.find((d) => d.id === id);
}
