import Plot from "react-plotly.js";

const AnyChart = ({ style, layout, data, config }) => {
  return (
    <>
      <Plot style={style} layout={layout} data={data} config={config} />
    </>
  );
};

export default AnyChart;
