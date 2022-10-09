import React from 'react';

class HoverComponentByClass extends React.Component{
    render(){
        const { count, incrementCount } = this.props;

        return (
            <h1 onMouseOver={incrementCount}>Hover {count} Times.</h1>
        );
    }
}

export default HoverComponentByClass;
