import React from 'react';
import ReactDOM from 'react-dom';

function Clock({local}){
    return (
        <h1 className="heading">
            <span className="text">
                {new Date().toLocaleTimeString(local)}
            </span>
        </h1>
    );
}

ReactDOM.render(<Clock local="bn-BD" />, document.getElementById("root"));
