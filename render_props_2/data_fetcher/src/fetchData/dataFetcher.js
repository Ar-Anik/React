import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
  console.log("Url : ", url);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setLoading(false);
        setData(data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    fetchData();
  }, [url]);

  console.log("data : ", data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error : {error?.message}</p>;
  }

  return children(data);
};

export default DataFetcher;
