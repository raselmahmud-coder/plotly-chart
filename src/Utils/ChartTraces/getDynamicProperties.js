import getFetchData from "./getFetchData";
const getDynamicProperties = async (value, fetchType) => {
  const data = await getFetchData(fetchType);
  return data[value[0]][value[1]][value[2]][value[3]];
};

export default getDynamicProperties;
