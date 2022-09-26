let lnk = document.querySelector(".cls");

let Increment = () => {
    let [counter, setCounter] = React.useState(0);
    // console.log(vlu)

    return (
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="button" onClick={ () => setCounter(counter + 1) }>Increment ++</button>
            </div>
        </div>
    );
};

ReactDOM.render(

    <div>

        <Increment />
        <Increment />
        <Increment />

    </div>

, lnk);
