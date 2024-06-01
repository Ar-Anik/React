import React from 'react';

/* When you define a class method in JavaScript, it doesn't automatically bind `this` to the instance of the class. 
Therefore, when you call this.handleClick(), `this` inside handleClick will be undefined or will refer to the global object (in non-strict mode). */

class Clock extends React.Component {
    state = {
        date : new Date(),
        local: 'bn-BD'
    }

    componentDidMount(){
        this.clkTime = setInterval(() => this.everySecond(), 1000);
    }

    everySecond() {
        this.setState({
            date : new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.clkTime);
    }

    handleClick(local) {
        this.setState({
            local
        })
    }

    render(){
        const { date, local } = this.state;
        return (
            <>
            <h1 className='head'>
                <span className='text'>
                    {date.toLocaleTimeString(local)}
                </span>
            </h1>
            <button type='button' onClick={this.handleClick.bind(this, 'en-US')}>Click Here</button>
            </>
        )
    }
}

export default Clock;
