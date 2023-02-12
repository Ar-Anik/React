import { Outlet, Route, Routes } from "react-router-dom";

function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is the home page</p>

      <Routes>
        <Route path="world" element={<p>This is Hello world -_- </p>} />

        <Route path="wld" element={<p>This is hlo wld 0o0</p>} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default Hello;
