const getFetchData = (fetchType) => {
  return fetch(
    fetchType === "twitter"//we can create private variable for this compare
      ? `twitter_api_response.json`
      : `facebook_sentiment.json`,
  ).then((res) => res.json());
};

export default getFetchData;
