import Counter from "./Counter";
import HoverComponent from "./HoverComponent";
import ThemeContext from "./ThemeContext";

function Content(){
    return (
        <div>
          <h1>This Comes From Content.</h1>

          <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverComponent count={count} incrementCount={incrementCount} theme={theme} />
                        )}
                    </ThemeContext.Consumer>
                )}
          </Counter>
          
        </div>
    );
}

export default Content;
