function ClickCounter({count, incrementCount}){
    return (
        <button type="button" onClick={incrementCount}>Button Clikced {count} Times.</button>
    );
}

export default ClickCounter;
