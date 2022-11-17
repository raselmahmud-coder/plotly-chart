import React from "react";
import { getTraceAll } from "../../Utils/ChartTraces/getTraceAll";
import AnyChart from "../AnyCharts/AnyChart";

const LineCharts = () => {
  const layout = {
    title: "Line and Scatter Plot",
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
            xValue: [1, 2, 3],
            yValue: [12, 9, 15],
            options: options1,
          }),
        ]}
      />
    </>
  );
};

export default LineCharts;
