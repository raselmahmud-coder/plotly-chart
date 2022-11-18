const getUseFetchData = () => {
  return fetch(
    /* `twitter_api_response.json` */ `facebook_sentiment.json`,
  ).then((res) => res.json());
};

export default getUseFetchData;
