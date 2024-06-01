import React from 'react';

class Button extends React.Component {
    // shouldComponentUpdate() is called before rendering when new props or state are being received.
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("NextProps : ", nextProps);

        const {change:currentChange, local:currentLocal} = this.props;
        const {change:nextChange, local:nextLocal} = nextProps;

        if(currentChange == nextChange && currentLocal == nextLocal)
            return false;

        return true;
    }
    render() {
        console.log("This Render From Button");

        const { change, local } = this.props;
        return (
            <button type='button' onClick={() => change(local)}>Click Here</button>
        )
    }
}

export default Button;
