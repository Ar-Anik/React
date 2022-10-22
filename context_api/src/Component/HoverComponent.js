function HoverComponent({count, incrementCount, theme}){
    const style = theme === 'dark' ? { backgroundColor: "black", color: "white" } : null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hover {count} Times.</h1>
        </div>
    );
}

export default HoverComponent;
