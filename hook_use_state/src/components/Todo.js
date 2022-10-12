import React from 'react';

class Todo extends React.Component {
    state = {
        todo: '',
        warning: '',
    };

    handleChange = (event) => {

        const vlu = event.target.value;

        this.setState({
            todo: vlu,
            warning: vlu.includes('.js') ? 'You Need JavaScript Skill For Complete Successfully.' : null,
        });
    };

    render(){
        const { todo, warning } = this.state;

        return (
            <div>
                <p>{ todo }</p>

                <div>
                    <textarea name='todo' value={ todo } onChange={this.handleChange} />
                </div>

                <hr />

                <h1>{warning || "Good Choice 0_0"}</h1>
            </div>
        );
    }
}

export default Todo;
