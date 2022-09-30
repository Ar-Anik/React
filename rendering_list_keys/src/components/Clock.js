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

        /* Option - 1
        let button;
        if(local === "bn-BD")
        {
            button = (
                <Button change={this.handleClick} local="en-US" />
            );
        }
        else
        {
            button = (
                <Button change={this.handleClick} local="bn-BD" />
            );
        } */

        return (
            <div>
                <h1 className="head1">
                    <span className="text">
                        {date.toLocaleTimeString(local)}
                    </span>
                </h1>

                {/* Option-1 */}
                {/* {button} */}

                {/* Option-2 */}
                {local === 'bn-BD' ? (
                    <Button change={this.handleClick} local="en-US" show={false} enable />
                ) : (
                    <Button change={this.handleClick} local="bn-BD" show={true} enable />
                )}

            </div>
        );
    }
}

export default Clock;