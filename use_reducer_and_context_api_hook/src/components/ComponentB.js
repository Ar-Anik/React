import { useContext } from "react";
import { context } from "../App";

function ComponentB() {
    const contextB = useContext(context);

    return (
        <div>
            <button type="button" onClick={() => contextB.dispatch("increment")}>Increment By 1</button>
            <button type="button" onClick={() => contextB.dispatch("decrement")}>Decrement By 1</button>
        </div>
    );

}

export default ComponentB;
