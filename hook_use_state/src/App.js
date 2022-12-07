import Counter from "./components/Counter";
import ObjectChange from "./components/Object_Use_State";
import Todo from "./components/Todo_by_Hook";
import LoginForm from "./useState_With_Multiple_Value/LoginForm";

function App() {
  return (
  <>
    <div>
      <Todo />

      <ObjectChange />

      <Counter /> 
    </div>

    <hr />

    <div>
      <LoginForm />
    </div>
  </>
  );
}

export default App;
