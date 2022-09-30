import React from 'react';

class Clock extends React.Component {
    state = {date: new Date() };

    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    render() {
        return (
            <h1 className="head1">
                <span className="text">
                    {new Date().toLocaleTimeString(this.props.local)}
                </span>
            </h1>
        );
    }
}
