import AnyChart from "./components/AnyChart";
import getDynamicProperties from "./Utils/getDynamicProperties";
import { getTrace1 } from "./Utils/ChartTraces/BarChartTrace";
import { useEffect, useState } from "react";
function App() {
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

  const style = { width: "50%", height: "100%" };
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

  const xValue = date; // should be date set up
  const yValue1 = tweets.negative;
  const yValue2 = tweets.positive;
  const yValue3 = tweets.neutral;
  console.log("twitterFetchData", twitterFetchData);
  return (
    <>
      <AnyChart
        style={style}
        layout={layout}
        config={config}
        data={getTrace1(xValue, {
          yValue1,
          yValue2,
          yValue3,
        })}
      />
    </>
  );
}

export default App;
