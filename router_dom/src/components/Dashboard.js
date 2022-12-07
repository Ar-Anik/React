import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  const value = {
    name: "Aubdur Rob Anik",
    id: "18101073",
    semester: "4-2",
  };

  const handleChange = () => {
    history.push("/", { value });
  };

  return (
    <div>
      <h1>This Comes From Dashboard.</h1>
      <button type="button" onClick={handleChange}>
        GoTo Home Page
      </button>
    </div>
  );
}

export default Dashboard;
