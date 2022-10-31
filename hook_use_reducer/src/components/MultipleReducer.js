import { useReducer } from 'react';

const initialState1 = 0;
const initialState2 = 5;

const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

function MultipleReducer() {
    const [count1, dispatch1] = useReducer(reducer, initialState1);
    const [count2, dispatch2] = useReducer(reducer, initialState2);

    return (
        <div>
            <div>
                <div>Total: {count1}</div>

                <button type="button" onClick={() => dispatch1("increment")}>Increment By 1</button>

                <button type="button" onClick={() => dispatch1("decrement")}>Decrement By 1</button>
            </div>

            <br />

            <div>
                <div>Total: {count2}</div>

                <button type="button" onClick={() => dispatch2("increment")}>Increment By 1</button>
                <button type="button" onClick={() => dispatch2("decrement")}>Decrement By 1</button>
            </div>
        </div>
    );
}

export default MultipleReducer;
