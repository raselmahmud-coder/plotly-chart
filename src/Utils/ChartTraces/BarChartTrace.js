import getDynamicProperties from "../getDynamicProperties";

const barChart = async () => {
  const info = await getDynamicProperties(
    "stats",
    "twitter",
    "timelineStats",
    "timeline",
    "sentimentAsCategories",
  );
  return info;
};
console.log(barChart())

const xValue = ["Negative Tweets", "Positive Tweets", "Neutral Tweets"];
const yValue = [12, 43, 33]; //for negative tweets
const yValue2 = [24, 16, 20]; //for positive tweets
const yValue3 = [12, 14, 23]; //for neutral tweets
export const trace1 = {
  x: xValue,
  y: yValue,
  type: "bar",
  text: yValue.map(String),
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
export const trace2 = {
  x: xValue,
  y: yValue2,
  type: "bar",
  text: yValue2.map(String),
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
export const trace3 = {
  x: xValue,
  y: yValue3,
  type: "bar",
  text: yValue3.map(String),
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
