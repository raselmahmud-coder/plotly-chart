import React from "react";
import { getTrace } from "../../Utils/ChartTraces/getTrace";
import AnyChart from "../AnyCharts/AnyChart";

const LineCharts = ({ segmentValues, fetchType }) => {
  const { date, meanSentiment } = segmentValues || {};
  const layout = {
    title: `${fetchType.toUpperCase()} Mean Sentiment`,
  };
  const style = { width: "100%", height: "100%" }; //if you want to change the size of the chart
  const config = {
    responsive: true,
  };
  const traceOptions = {
    type: "scatter",
    mode: "lines+markers",
    text: meanSentiment.map(String),
    textposition: "auto",
    name: `Mean Sentiment ${fetchType.toUpperCase()}`,
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
          getTrace({
            xValue: date,
            yValue: meanSentiment,
            options: traceOptions,
          }),
        ]}
      />
    </>
  );
};

export default LineCharts;
