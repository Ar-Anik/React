import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currentChange, local } = this.props;
        const {change : nextChange} = nextProps;
        if(currentChange === nextChange)
            return false;
        
        return true;
    }

    render(){
        console.log("Button Component Rendered");
        const {change, local} = this.props;
        return (
            <button type='button' onClick={() => change(local)}>Click Here</button>
        );
    }
}

export default Button;