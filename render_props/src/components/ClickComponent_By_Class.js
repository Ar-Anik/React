import React from 'react';

class ClickComponentByClass extends React.Component{
    render(){
        const { count, incrementCount } = this.props;

        return (
            <button type='button' onClick={incrementCount}>Button Clicked {count} Times.</button>
        );
    }
}

export default ClickComponentByClass;
