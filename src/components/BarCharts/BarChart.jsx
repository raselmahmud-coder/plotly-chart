import React from "react";
import { useEffect, useState } from "react";
import AnyChart from "../AnyCharts/AnyChart";
import getDynamicProperties from "../../Utils/getDynamicProperties";
import { getTraceAll } from "../../Utils/ChartTraces/getTraceAll";

const BarChart = () => {
  const [twitterFetchData, setTwitterFetchData] = useState([]);
  const [tweets, setTweets] = useState({
    negative: [],
    neutral: [],
    positive: [],
  });
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(twitterFetchData.map((item) => item["date"]));
    setTweets({
      negative: twitterFetchData.map(
        (item) => item["sentimentAsCategories"]["negativeTweets"],
      ),
      neutral: twitterFetchData.map(
        (item) => item["sentimentAsCategories"]["neutralTweets"],
      ),
      positive: twitterFetchData.map(
        (item) => item["sentimentAsCategories"]["positiveTweets"],
      ),
    });
  }, [twitterFetchData]);

  const style = { width: "100%", height: "100%" };
  const layout = { title: "Twitter Segment" };
  const config = {
    responsive: true,
  };
  // console.log(tweets, "tweets");
  useEffect(() => {
    // doTweetsSet("negative");
    const barChart = async () => {
      const data = await getDynamicProperties([
        "stats",
        "twitter",
        "timelineStats",
        "timeline",
      ]);
      setTwitterFetchData(data);
    };
    barChart();
  }, []);
  // yValues1:[[22,43],[23,45],[24,46]],
  const xValue = date; // should be date set up
  const yValue1 = tweets.negative;
  const yValue2 = tweets.positive;
  const yValue3 = tweets.neutral;
  /* ============= other options =========== */
  const options1 = {
    type: "bar",
    text: yValue1?.map(String),
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
  const options2 = {
    type: "bar",
    text: yValue2?.map(String),
    name: "Positive Tweets",
    textposition: "auto",
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
    text: yValue3?.map(String),
    name: "Neutral Tweets",
    textposition: "auto",
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
