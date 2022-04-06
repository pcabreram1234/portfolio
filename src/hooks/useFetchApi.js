import { useState, useEffect } from "react";

function useFetchApi(API) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((info) => {
        return info.json();
      })
      .then((date_info) => {
        setData(date_info);
      });
  }, []);
  return data;
}

export default useFetchApi;
