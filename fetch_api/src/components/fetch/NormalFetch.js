import { useEffect, useState } from "react";

function NormalFetch() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.quotable.io/random");
      const data = await result.json();

      setValue(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Get Data Using Fetch API</h1>

      <div>{value?.content}</div>
    </div>
  );
}

export default NormalFetch;
