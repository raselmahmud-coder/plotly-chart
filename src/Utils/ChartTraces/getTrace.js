export const getTrace = ({ xValue, yValue, options }) => {
  const { type, text, textposition, name, marker } = options || {};
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
