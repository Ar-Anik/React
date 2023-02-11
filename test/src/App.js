import { useEffect, useState } from "react";
import Testing from "./testy/testy";

function App() {
  let c = 1;
  const [cnt, setCnt] = useState(c);
  const [checkValue, setCheckValue] = useState(true);

  const testperpose = () => {
    console.log("print hogeya........");
  };

  const handleClick = () => {
    setCheckValue(true);
    c++;
    setCnt(c);
    console.log("Conunt Increment.");
  };

  useEffect(() => {
    testperpose();
  }, [checkValue]);

  useEffect(() => {
    console.log("cnt: ", cnt);
  }, [cnt]);

  return (
    <>
      <Testing />
      <button type="button" onClick={() => handleClick()}>
        Test
      </button>
    </>
  );
}

export default App;
