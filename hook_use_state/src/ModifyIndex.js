import React from 'react';
import ReactDOM from 'react-dom';

const states = [];
let stateIndex = -1;

function useStates(defaultValue){
    const indx = ++stateIndex;

    if(states[indx])
        return states[indx];

    const setValue = (newvalue) =>{
        states[indx][0] = newvalue;

        modifytindex();
    }

    const returnvalue = [defaultValue, setValue];
    states[indx] = returnvalue;

    return returnvalue;
}

function App(){
    const [todo, setTodo] = useStates('');
    const [warning, setWarning] = useStates(null);

    const handleChange = (event) => {
        const vlu = event.target.value;
        const updatewarning = vlu.includes('.js') ? 'First Need JavaScript Knowledge Then you will be Success.' : null;

        setTodo(vlu);
        setWarning(updatewarning);
    };

    return (
        <>
            <p> { todo } </p>

            <div>
                <textarea name="Todo" value={todo} onChange={handleChange} />
            </div>

            <hr />

            <p> { warning || "Gooooooodddd 0_0" } </p>
        </>
    );
}

function modifytindex(){
    stateIndex = -1;
    ReactDOM.render(<App />, document.getElementById("root"));
}

modifytindex();
