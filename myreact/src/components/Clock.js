import React from 'react';

class Clock extends React.Component {
    /* Option - 1
     constructor(props)
     {
         super(props);
         this.state = {date : new Date(), local : 'bn-BD'};
         this.handleClick = this.handleClick.bind(this);
     } */

    state = {date: new Date(), local: 'bn-BD' };

    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    /* Option - 2
    handleClick = () => {
        this.setState({
            local : 'en-US',
        });
    } */

    // Option - 3
    handleClick = (local) => {
        this.setState({
            local,
        });
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    // handleClick(event){
    //     // event.preventDefault();
    //     console.log("This Button Was Clicked.");
    // }

    render() {
        const {date, local} = this.state;
        return (
            <div>
                <h1 className="head1">
                    <span className="text">
                        {/* {this.state.date.toLocaleTimeString(this.props.local)} */}
                        {date.toLocaleTimeString(local)}
                    </span>
                </h1>
                {/* <button type="button" onClick={this.handleClick}>Click Here</button> */}
                {/* <button type="button" onClick={this.handleClick.bind(this, 'en-US')}>Click Here</button> */}
                <button type="button" onClick={() => this.handleClick('en-US')}>Click Here</button>
            </div>
        );
    }
}

export default Clock;
