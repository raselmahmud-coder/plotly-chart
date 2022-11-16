export const getTraceAll = ({ xValue, yValue, options }) => {
  const { type, text, textposition, name, marker } = options || {};
  // console.log(options, "Options");
  const traces = {
    x: xValue,
    y: yValue,
    type,
    text,
    textposition,
    name,
    marker,
  };
  return traces;
};
