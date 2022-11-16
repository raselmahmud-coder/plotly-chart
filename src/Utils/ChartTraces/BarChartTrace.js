// const xValue = ["Negative Tweets", "Positive Tweets", "Neutral Tweets"];
//const yValue = [12, 43, 33]; //for negative tweets

export const getTrace1 = (
  xValue,
  { yValue1, yValue2, yValue3 },
) => {
  // console.log(yValue1, yValue2, yValue3);
  console.log(xValue,"xValue");
  const trace1 = {
    x: xValue,
    y: [30, 18],
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
  const trace2 = {
    x: xValue,
    y: [22, 15],
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
  const trace3 = {
    x: xValue,
    y: [11, 18],
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

  return [trace1, trace2, trace3];
};
