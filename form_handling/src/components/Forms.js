import React from 'react';

class Forms extends React.Component{
    state = {
        text: 'Javascript',
        textarea: 'Aubdur Rob Anik',
        select: "React",
        checkbox: true,
    };

    handleChange = (event) => {
        // console.log(event.target.value);
        // this.setState({
        //     text: event.target.value,
        // });

        if(event.target.type === "text")
        {
            this.setState({
                text: event.target.value,
            });
        }
        else if(event.target.type === "textarea")
        {
            this.setState({
                textarea: event.target.value,
            });
        }
        else if(event.target.type === "select-one")
        {
            this.setState({
                select: event.target.value,
            });
        }
        else if(event.target.type === "checkbox")
        {
            this.setState({
                checkbox: event.target.value,
            });
        }
        else
        {
            console.log("Change Not Detect");
        }

        // this.setState({
        //     [event.target.type] : event.target.value,
        // })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { text, textarea, select, checkbox } = this.state;
        console.log(text);
        console.log(textarea);
        console.log(select);
        console.log(checkbox);
    };
    
    render()
    {
        const { text, textarea, select, checkbox } = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="input1" placeholder='Enter Name' value={text} onChange={this.handleChange} />

                    <br />
                    <br />

                    <textarea name="input2" cols="30" rows="10" value={textarea} onChange={this.handleChange} />

                    <br />
                    <br />

                    <select name="input3" value={select} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Next">Next</option>
                        <option value="Node">Node</option>
                    </select>

                    <br />
                    <br />

                    <input type="checkbox" name="input4" value={checkbox} onClick={this.handleChange}/>

                    <br />
                    <br />

                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

export default Forms;
