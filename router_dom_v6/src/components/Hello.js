import { Route } from "react-router-dom";

function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is the home page</p>
      <Route path="/hello/world">
        <p>This is Hello world -_- </p>
      </Route>

      <Route path="/hlo/wld">
        <p>This is hlo wld 0o0</p>
      </Route>
    </div>
  );
}

export default Hello;
