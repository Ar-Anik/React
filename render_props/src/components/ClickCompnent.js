import React from 'react';

class ClickCount extends React.Component {
    state = {
        count: 0,
    };

    handleClick = () => {
        this.setState((previusState) => ({ count: previusState.count + 1 }));
    }

    render(){
        const { count } = this.state; 

        return (
            <button type='button' onClick={this.handleClick}>Button Click {count} Times.</button>
        );
    }
}

export default ClickCount;
