// import ClickCount from "./components/ClickCompnent";
// import HoverCount from "./components/HoverComponents";
// import User from './components/User';

import ClickComponentByClass from "./components/ClickComponent_By_Class";
import Counter from "./components/Counter";
import HoverComponentByClass from "./components/HoverComponent_By_Class";

function App() {
  return (
    <>
      {/* <div>
        <ClickCount />  
      </div>  

      <div>
        <HoverCount />
      </div>

      <div>
        <User name={(value) => value ? "Aubdur Rob Anik" : "Guest"}/>
      </div> */}
      {/* <div>
        <Counter render = {(count, incrementCount) => (
            <ClickComponentByClass count={count} incrementCount={incrementCount} />
        )} />
      </div>

      <div>
        <Counter render= {(count, incrementCount) => (
          <HoverComponentByClass count={count} incrementCount={incrementCount} />
        )} />
      </div> */}

      <div>
        <Counter>
          {(count, incrementCount) => (
            <ClickComponentByClass count={count} incrementCount={incrementCount} />
          )}
        </Counter>
      </div>

      <div>
        <Counter>
          {(count, incrementCount) => (
            <HoverComponentByClass count={count} incrementCount={incrementCount} />
          )}
        </Counter>
      </div>

    </>
  );
}

export default App;
