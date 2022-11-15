import getUseFetchData from "../hooks/getUseFetchData";

const getDynamicProperties = async (
  stats,
  twitter,
  timelineStats,
  timeline,
  sentimentAsCategories,
) => {
 const data = await getUseFetchData();
  const barChartProperties = data?.[stats]?.[twitter]?.[timelineStats]?.[timeline]?.map((item) => item[sentimentAsCategories]);
  // console.log("bar chart",barChartProperties);
  return barChartProperties;
};

export default getDynamicProperties;
