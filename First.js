console.log(React);
console.log(ReactDOM);

let lnk = document.querySelector("#root");
ReactDOM.render('Aubdur Rob Anik', lnk);

let dv = document.querySelector(".root");
ReactDOM.render("University Of Asia Pacific", dv);

let dvlnk = document.querySelector(".cls");
let element = React.createElement("div", null, "Hello We Can See Me?");

ReactDOM.render(element, dvlnk);

let dvlk = document.querySelector(".dv");
let dvelement = React.createElement("div", null, [
    React.createElement("p", null, "P Tag-1"),
    React.createElement("p", null, "P Tag-2"),
]);

ReactDOM.render(dvelement, dvlk);


