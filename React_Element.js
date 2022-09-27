import React from 'react';
import ReactDOM from 'react-dom';

let index = 2;
let element = (
    <h1 className="heading" tabIndex={index}>
      <span className="text">Hello World</span>
      <img src="" />
    </h1>
);

ReactDOM.render(element, document.getElementById('root1'));

let index1=1;
setInterval(() => {
  let element = (
    <h1 className="heading1" tabIndex={index1}>
      <span>{new Date().toLocaleTimeString()}</span>
    </h1>
  );
  ReactDOM.render(element, document.getElementById("root2"));
}, 1000);
