// import { useEffect, useState } from "react";

const getUseFetchData = () => {
  return fetch(`twitter_api_response.json`).then((res) => res.json());
};

export default getUseFetchData;
