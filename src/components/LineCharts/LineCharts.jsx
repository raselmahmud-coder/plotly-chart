import React from "react";
import useGetData from "../../hooks/useGetData";
import { getTraceAll } from "../../Utils/ChartTraces/getTraceAll";
import AnyChart from "../AnyCharts/AnyChart";

const LineCharts = () => {
  const { tweets } = useGetData(
    ["stats", "twitter", "timelineStats", "timeline"],
    {
      meanSentiment: "meanSentiment",
      date: "date",
    },
  );
  // console.log(tweets.date, "tweets");
  const layout = {
    title: "Twitter Mean Sentiment",
  };
  const style = { width: "100%", height: "100%" };
  const config = {
    responsive: true,
  };
  const options1 = {
    type: "scatter",
    mode: "lines+markers",
    // text: yValue1?.map(String),
    textposition: "auto",
    name: "Negative Tweets",
    marker: {
      color: "rgb(158,202,225)",
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };
  return (
    <>
      <AnyChart
        style={style}
        layout={layout}
        config={config}
        data={[
          getTraceAll({
            xValue: tweets.date,
            yValue: tweets.meanSentiment,
            options: options1,
          }),
        ]}
      />
    </>
  );
};

export default LineCharts;
