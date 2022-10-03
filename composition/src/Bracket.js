import React from 'react';

// eslint-disable-next-line no-unused-vars
class Bracket extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    addBracket = (text) => `[ ${text} ]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ addBracket: this.addBracket });
    }
}

export default Bracket;
