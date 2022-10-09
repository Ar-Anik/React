import React from 'react';

class HoverCount extends React.Component {
    state = {
        count: 0,
    };

    handelhover = () => {
        this.setState((previusState) => ({
            count: previusState.count + 1
        }));
    };

    render(){
        const { count } = this.state;

        return (
            <h1 onMouseOver={this.handelhover}>Hover {count} Times.</h1>
        );
    }
}

export default HoverCount;
