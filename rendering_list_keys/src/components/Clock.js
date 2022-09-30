import React from 'react';
import Button from './Button';

class Clock extends React.Component{
    state = {date: new Date(), local: 'bn-BD'};

    componentDidMount(){
        this.clockTimer = setInterval(() => this.trick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    handleClick = (local) => {
        this.setState({
            local,
        });
    }

    trick(){
        this.setState({
            date : new Date(),
        });
    }

    render(){
        const {date, local} = this.state;

        return (
            <div>
                <h1 className="head1">
                    <span className="text">
                        {date.toLocaleTimeString(local)}
                    </span>
                </h1>

                <Button change={this.handleClick} local="en-US" />
            </div>
        );
    }
}

export default Clock;