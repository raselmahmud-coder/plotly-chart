import { useEffect, useState } from "react";
import getDynamicProperties from "../Utils/getDynamicProperties";

const useGetData = (allData = [], items = {}) => {
  const {
    sentimentAsCategories,
    negativeTweets,
    neutralTweets,
    positiveTweets,
    meanSentiment,
    date,
  } = items || {};
  const [twitterFetchData, setTwitterFetchData] = useState([]);
  const [tweets, setTweets] = useState({
    negative: [],
    neutral: [],
    positive: [],
    meanSentiment: 0,
    date: "",
  });
  useEffect(() => {
    const barChart = async () => {
      const data = await getDynamicProperties(allData);
      setTwitterFetchData(data);
    };
    barChart();
  }, [allData]);
  useEffect(() => {
    setTweets((tw) => ({
      ...tw,
      negative:
        negativeTweets &&
        twitterFetchData.map(
          (item) => item[sentimentAsCategories][negativeTweets],
        ),
      neutral:
        neutralTweets &&
        twitterFetchData.map(
          (item) => item[sentimentAsCategories][neutralTweets],
        ),
      positive:
        positiveTweets &&
        twitterFetchData.map(
          (item) => item[sentimentAsCategories][positiveTweets],
        ),
      meanSentiment:
        meanSentiment && twitterFetchData.map((item) => item[meanSentiment]),
      date: date && twitterFetchData.map((item) => item[date]),
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    twitterFetchData,
  ]);
  return { tweets };
};

export default useGetData;
