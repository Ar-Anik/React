import React from 'react';
import Content from './Content';

class Section extends React.Component{
    render(){
        const {theme} = this.props;

        return (
            <div>
                <h1>This is Section Class.</h1>
                <Content theme={theme} />
            </div>
        );
    }
}

export default Section;
