import React from "react";
import AnyChart from "../AnyCharts/AnyChart";
import { getTrace } from "../../Utils/ChartTraces/getTrace";

const BarChart = ({ segmentValues, fetchType }) => {
  const { date, negative, positive, neutral } = segmentValues || {};
  const style = { width: "100%", height: "100%" };//if you want to change the size of the chart
  const layout = { title: `${fetchType.toUpperCase()} Segment` };
  const config = {
    responsive: true,
  };
  /* ============= other options =========== */
  const traceOptions1 = {
    textposition: "auto",
    type: "bar",
    text: negative.map(String),
    name: `Negative ${fetchType === "twitter" ? "Tweets" : "Comments"}`,
    marker: {
      color: "rgb(158,202,225)",
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };
  const traceOptions2 = {
    type: "bar",
    textposition: "auto",
    text: positive.map(String),
    name: `Positive ${fetchType === "twitter" ? "Tweets" : "Comments"}`,
    marker: {
      color: "rgba(58,200,225,.5)",
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };
  const traceOptions3 = {
    type: "bar",
    textposition: "auto",
    text: neutral.map(String),
    name: `Neutral ${fetchType === "twitter" ? "Tweets" : "Comments"}`,
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
          getTrace({
            xValue: date,
            yValue: negative,
            options: traceOptions1,
          }),
          getTrace({
            xValue: date,
            yValue: positive,
            options: traceOptions2,
          }),
          getTrace({
            xValue: date,
            yValue: neutral,
            options: traceOptions3,
          }),
        ]}
      />
    </>
  );
};

export default BarChart;
