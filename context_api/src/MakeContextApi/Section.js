import React from 'react';
import Content from './Content';

class Section extends React.Component{
    render(){
        return (
            <div>
                <h1>This is Section Class.</h1>
                <Content />
            </div>
        );
    }
}

export default Section;
