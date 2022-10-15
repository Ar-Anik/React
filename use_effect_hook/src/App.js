import { useState } from "react";
// import WithoutUseEffect from "./Without_use_Effect";
import HookUseEffect from "./Hook_use_Effect";

function App() {
  const [ show, setShow ] = useState(true);

  return (
    <div>
      {/* <WithoutUseEffect /> */}
      {/* <HookUseEffect /> */}

      {/* <div>{show && <WithoutUseEffect />}</div>

      <button type="button" onClick={() => setShow((previous) => !previous)}>
        {show ? 'Hide Post' : 'Show Post'}
      </button> */}

      <div>{show && <HookUseEffect />}</div>

      <button type="button" onClick={() => setShow((previous) => !previous)}>
        {show ? 'Hide Post' : 'Show Post'}
      </button>

    </div>
  );
}

export default App;
