import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function, no-unused-vars
class WithoutUseEffect extends React.Component {

    state = {
        count: 0,
        date: new Date(),
    };

    componentDidMount(){
        const { count } = this.state;
        document.title = `Clicked ${count} Times`;
        this.interval = setInterval(this.updateDate, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} Times`;
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    addClick = () => {
        this.setState((previus) => ({
            count: previus.count + 1,
        }));
    };

    updateDate = () => {
        // console.log("Fucking Clock");
        this.setState({
            date: new Date(),
        });
    };

    render() {

        const { date } = this.state;

        return (
            <>
                <p>Time : { date.toLocaleTimeString() }</p>

                <p> 
                    <button type="button" onClick={this.addClick}>
                        Click
                    </button>
                </p>
            </>
        );
    }
}

export default WithoutUseEffect;
