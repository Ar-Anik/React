import React, { useReducer } from 'react';
import ComponentA from "./components/ComponentA";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

export const context = React.createContext();

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Total : {count}</div>

            <context.Provider value={{ dispatch: dispatch }}>
                <ComponentA />
            </context.Provider>
        </div>
    );
}

export default App;
