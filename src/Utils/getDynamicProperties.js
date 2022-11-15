import getUseFetchData from "../hooks/getUseFetchData";

const getDynamicProperties = (
  stats,
  twitter,
  timelineStats,
  timeline,
  sentimentAsCategories,
) => {
 return getUseFetchData().then((data) => {
    const barChartProperties = data?.[stats]?.[twitter]?.[timelineStats]?.[
      timeline
    ]?.map((item) => item[sentimentAsCategories]);
    // console.log("barProperties", barChartProperties);
    return barChartProperties;
  });
};

export default getDynamicProperties;
