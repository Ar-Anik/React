import Counter from "./Counter";
import HoverComponent from "./HoverComponent";

function Content({theme}){
    return(
        <div>
            <h1>This is from Content Function</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverComponent count={count} incrementCount={incrementCount} theme={theme}/>
                )}
            </Counter>
        </div>
    );
}

export default Content;
