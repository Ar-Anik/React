import { Suspense } from "react";
import FetchData from "./components/axios/FetchData";
import NormalFetch from "./components/fetch/NormalFetch";
import DataFetch from "./components/SWR/FetchData";

import { QueryClient, QueryClientProvider } from "react-query";
import BringData from "./components/react-query/BringData";

function App() {
  // const client = new QueryClient();

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <>
      <NormalFetch />

      <hr />

      <FetchData />

      <hr />

      <Suspense fallback={<h1>Loading Data ...</h1>}>
        <DataFetch />
      </Suspense>

      <hr />

      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <BringData />
          <BringData />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
