import { useReducer } from 'react';

const initialState = {
    count: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + action.value,
            };
        case "decrement":
            return {
                count: state.count - action.value,
            };
        default:
            return state;
    }
};

function ComplexCounter2() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Total : { count.count }</div>

            <button type="button" onClick={() => dispatch({
                type: "increment",
                value: 1,
            })}>Increment By 1</button>

            <button type="button" onClick={() => dispatch({
                type: "increment",
                value: 5,
            })}>Increment By 5</button>

            <button type="button" onClick={() => dispatch({
                type: "decrement",
                value: 1,
            })}>Decrement By 1</button>

            <button type="button" onClick={() => dispatch({
                type: "decrement",
                value: 5,
            })}>Decrement By 5</button>
        </div>
    );
}

export default ComplexCounter2;
