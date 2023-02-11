import { useEffect, useState } from "react";
import generatePDF from "./reportGenerator";
import ShowData from "./showData";

const ApiData = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      setValues(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => generatePDF(values)}>Pdf Generate</button>

      <ShowData values={values} />
    </div>
  );
};

export default ApiData;
