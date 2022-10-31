import { useReducer } from "react";

const initialState = {
    count1: 0,
    count2: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment-1":
            return {
                ...state,
                count1: state.count1 + action.value,
            };
        case "decrement-1":
            return {
                ...state,
                count2: state.count2 + action.value,
            };
        case "increment-5":
            return {
                ...state,
                count1: state.count1 + action.value,
            };
        case "decrement-5":
            return {
                ...state,
                count2: state.count2 + action.value,
            };
        default:
            return state;
    }
};

function ComplexCounter3() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <div>Total : {count.count1}</div>

                <button type="button" onClick={() => dispatch({
                    type: "increment-1",
                    value: 1,
                })}>Increment By 1</button>

                <button type="button" onClick={() => dispatch({
                    type: "decrement-1",
                    value: 1,
                })}>Decrement By 1</button>
            </div>

            <br />

            <div>
                <div>Total : {count.count2}</div>

                <button type="button" onClick={() => dispatch({
                    type: "increment-5",
                    value: 5
                })}>Increment By 5</button>

                <button type="button" onClick={() => dispatch({
                    type: "decrement-5",
                    value: 5,
                })}>Decrement By 5</button>
            </div>
        </>
    );
}

export default ComplexCounter3;
