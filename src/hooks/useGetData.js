import { useEffect, useState } from "react";
import getDynamicProperties from "../Utils/ChartTraces/getDynamicProperties";

const useGetData = (fetchType = null) => {
  const [twitterFetchData, setTwitterFetchData] = useState([]);
  const [segmentValues, setSegmentValues] = useState({
    negative: [],
    neutral: [],
    positive: [],
    meanSentiment: 0,
    date: "",
  });
  const isTwitter = fetchType === "twitter" ? true : false;
  useEffect(() => {
    const barChart = async () => {
      const data = await getDynamicProperties(
        [
          "stats",
          isTwitter ? "twitter" : "facebook",
          "timelineStats",
          "timeline",
        ],
        isTwitter ? "twitter" : "facebook",
      );
      setTwitterFetchData(data);
    };
    barChart();
  }, [isTwitter]);
  useEffect(() => {
    setSegmentValues((tw) => ({
      ...tw,
      negative: twitterFetchData.map(
        (item) =>
          item["sentimentAsCategories"][
            isTwitter ? "negativeTweets" : "negativeComments"
          ],
      ),
      neutral: twitterFetchData.map(
        (item) =>
          item["sentimentAsCategories"][
            isTwitter ? "neutralTweets" : "neutralComments"
          ],
      ),
      positive: twitterFetchData.map(
        (item) =>
          item["sentimentAsCategories"][
            isTwitter ? "positiveTweets" : "positiveComments"
          ],
      ),
      meanSentiment: twitterFetchData.map((item) => item["meanSentiment"]),
      date: twitterFetchData.map((item) => new Date(item["date"]).toDateString()),
    }));
  }, [isTwitter, twitterFetchData]);
  return { segmentValues };
};

export default useGetData;
