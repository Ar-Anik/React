import { useQuery } from "react-query";
import getData from "./getData";

function BringData() {
  const { data } = useQuery("fisrt", () => getData());

  return (
    <div>
      <h1>Get Data By Using React Query</h1>

      <div>{data?.content}</div>
    </div>
  );
}

export default BringData;
