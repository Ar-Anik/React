import withCounter from './withCounter';
const HoverCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <h1 onMouseOver={incrementCount}>Hover {count} Times</h1>
    );
};

export default withCounter(HoverCounter);
