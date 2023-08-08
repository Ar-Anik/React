import withLoading from "./wrapComponent/wrapComponent";
import MyComponent from "./wrapComponent/myComponent";

function App() {
  const MyComponentWithLoading = withLoading(MyComponent);

  return <MyComponentWithLoading />;
}

export default App;
