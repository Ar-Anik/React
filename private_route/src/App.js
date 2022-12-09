import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navber from "./components/Navber";
import Home from "./components/Home";
import Login from "./components/Login";
// import PrivateRoute from "./components/PrivateRoute";
import PrivateOutlet from "./components/PrivateOutlet";

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route exact path="/dashboard">
          <Dashboard />
        </Route> */}

        {/* <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute> */}

        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
