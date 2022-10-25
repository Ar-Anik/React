function HoverCounter({ count, incrementCount, theme, switchTheme }){
    const style= theme === "dark" ? {backgroundColor: 'black', color:'white'} : null; 

    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Mouse Hover {count} Times.</h1>

            <button type="button" onClick={switchTheme}>Color Change</button>
        </div>
    );
}

export default HoverCounter;
