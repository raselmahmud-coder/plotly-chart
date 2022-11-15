import React from "react";
import Plot from "react-plotly.js";
import { trace1, trace2, trace3 } from "../Utils/ChartTraces/BarChartTrace";
const BarChart = () => {
  return (
    <>
      <Plot
        style={{ width: "50%", height: "100%" }}
        layout={{ title: "Twitter Segment" }}
        data={[trace1, trace2, trace3]}
        config={{
          responsive: true,
        }}
      />
    </>
  );
};

export default BarChart;
