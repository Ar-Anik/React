function ClickCounter({count, incrementCount}){
    return (
        <button type="button" onClick={incrementCount}>Button Clicked {count} Times.</button>
    );
}

export default ClickCounter;
