import axios from 'axios';
import React from 'react';

class PostRequest extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userId : '',
            title: 'No title',
            body: '',
        }
    }

    idHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    };

    Handlertitle = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value,
        });
    };

    bodyHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        const {userId, titles, body} = this.state;

        return(
            <>
                <div>
                    <input type="text" name="userId" placeholder="Enter Name" value={userId} onChange={this.idHandler}/>
                </div>
                <div>
                    <input type="text" name="title" placeholder="Enter Title" value={titles} onChagne={this.Handlertitle} />
                </div>
                <div>
                    <input type="text" name="body" placeholder="Enter Body" value={body} onChange={this.bodyHandler} />
                </div>
                <div>
                    <button type="submit" onClick={this.submitHandler}>Submit</button>
                </div>
            </>
        );
    }
}

export default PostRequest;
