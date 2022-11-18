import React from "react";
import AnyChart from "../AnyCharts/AnyChart";
import { getTraceAll } from "../../Utils/ChartTraces/getTraceAll";
import useGetData from "../../hooks/useGetData";

const BarChart = () => {
  const {tweets} = useGetData(
    ["stats", "twitter", "timelineStats", "timeline"],
    {
      sentimentAsCategories: "sentimentAsCategories",
      negativeTweets: "negativeTweets",
      neutralTweets: "neutralTweets",
      positiveTweets: "positiveTweets",
      date:"date"
    },
  );
  const style = { width: "100%", height: "100%" };
  const layout = { title: "Twitter Segment" };
  const config = {
    responsive: true,
  };
  // console.log(tweets, "tweets");
  const xValue = tweets.date; // should be date set up
  const yValue1 = tweets.negative;
  const yValue2 = tweets.positive;
  const yValue3 = tweets.neutral;
  /* ============= other options =========== */
  const options1 = {
    textposition: "auto",
    type: "bar",
    text: yValue1?.map(String),
    name: "Negative Tweets",
    marker: {
      color: "rgb(158,202,225)",
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };
  const options2 = {
    type: "bar",
    textposition: "auto",
    text: yValue2?.map(String),
    name: "Positive Tweets",
    marker: {
      color: "rgba(58,200,225,.5)",
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };
  const options3 = {
    type: "bar",
    textposition: "auto",
    text: yValue3?.map(String),
    name: "Neutral Tweets",
    marker: {
      color: "rgba(178,250,225,.5)",
      line: {
        color: "rgb(3,48,107)",
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
            xValue,
            yValue: yValue1,
            options: options1,
          }),
          getTraceAll({
            xValue,
            yValue: yValue2,
            options: options2,
          }),
          getTraceAll({
            xValue,
            yValue: yValue3,
            options: options3,
          }),
        ]}
      />
    </>
  );
};

export default BarChart;
