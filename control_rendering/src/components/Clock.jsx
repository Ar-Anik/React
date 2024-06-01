import React from "react";
import Button from "./Button";

class Clock extends React.Component {
    state = {
        date : new Date(),
        local : 'bn-BD'
    }

    componentDidMount() {
        this.clockerTimer = setInterval(() => this.everySecond(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockerTimer);
    }

    everySecond() {
        this.setState({
            date : new Date()
        })
    }

    handleClick = (local) => {
        this.setState({
            local
        })
    }

    render() {
        const {date, local} = this.state;
        console.log("This render from Clock");
        return (
            <>
                <h1 className="head">
                    <span className="text">{date.toLocaleTimeString(local)}</span>
                </h1>
                <Button change={this.handleClick} local='en-US' />
            </>
        )
    }
}


export default Clock;