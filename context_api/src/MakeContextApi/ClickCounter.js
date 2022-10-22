function ClickCounter({count, incrementCount}){
    return (
        <button type="button" onClick={incrementCount}>Button Click {count} Times.</button>
    );
}

export default ClickCounter;
