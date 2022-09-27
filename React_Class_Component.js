import React from 'react';
import ReactDOM from 'react-dom';

class Clock{
    print() {
        return(
            <h1 className="head1">
                <span className="text1">
                    {new Date().toLocaleTimeString()}
                </span>
            </h1>
        );
    }
}

const clockObject = new Clock();
const lnk1 = document.querySelector('#root1');
ReactDOM.render(clockObject.print(), lnk1);

class Times extends React.Component{
    render(){
        return (
            <h2 className='head2'>
                <span className='text2'>
                    {new Date().toLocaleTimeString(this.props.local)}
                </span>
            </h2>
        );
    }
}

const lnk2 = document.querySelector("#root2");
ReactDOM.render(<Times local="bn-BD" />, lnk2);

class Somoy extends React.Component{
    render(){
        return (
            <h1 className="head3">
                <span className="text">
                    {this.props.children} {new Date().toLocaleDateString(this.props.local)}
                </span>
            </h1>
        )
    }
}

ReactDOM.render(<Somoy local="bn-BD">Date :</Somoy>, document.querySelector("#root3"));
