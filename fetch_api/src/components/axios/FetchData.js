import axios from "axios";
import { useEffect, useState } from "react";

function FetchData() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchAxios = async () => {
      const result = await axios.get("https://api.quotable.io/random");
      const data = result.data;

      setValue(data);
    };

    fetchAxios();
  }, []);

  return (
    <div>
      <h1>Get Data By Axios</h1>

      <div>{value?.content}</div>
    </div>
  );
}

export default FetchData;
