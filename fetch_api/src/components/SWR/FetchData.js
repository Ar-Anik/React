import useSWR from "swr";

const defaultFetch = async (...arg) => {
  const result = await fetch(...arg);
  const data = result.json();

  return data;
};

function DataFetch() {
  const { data, error } = useSWR(
    "https://api.quotable.io/random",
    defaultFetch,
    {
      suspense: true,
    }
  );

  if (error) {
    return <h1>This is something wrong...</h1>;
  }

  return (
    <div>
      <h1>Data Management By SWR</h1>

      <div>{data?.content}</div>
    </div>
  );
}

export default DataFetch;
