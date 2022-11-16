import getUseFetchData from "../hooks/getUseFetchData";

const getDynamicProperties = async (value) => {
  const data = await getUseFetchData();

  /*   // console.log(value.join("[]"), "info");
  // [stats][twitter][timelineStats][timeline]
  console.log(data["stats"]["twitter"]["timelineStats"]["timeline"], "value"); */
  return data[value[0]][value[1]][value[2]][value[3]];
};

export default getDynamicProperties;
