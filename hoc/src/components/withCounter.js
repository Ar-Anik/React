import React from 'react';

// eslint-disable-next-line no-unused-vars
const withCounter = (OriginalComponent) => {
    // eslint-disable-next-line no-unused-vars
    class NewComponent extends React.Component {
        state = {
            // eslint-disable-next-line react/no-unused-state
            count: 0,
        };

        // eslint-disable-next-line class-methods-use-this, react/no-unused-class-component-methods
        incrementCount = () => {
            this.setState((previusState) => ({
                count: previusState.count + 1
            }));
        };

        render(){
            const { count } = this.state;

            return (
                <OriginalComponent count={count} incrementCount={this.incrementCount} />
            );
        }
    }

    return NewComponent;
};

export default withCounter;


// import React from 'react';

// const withCounter = (OriginalComponent) => {
//     class NewComponent extends React.Component {
//         state = {
//             count: 0,
//         };

//         incrementCount = () => {
//             this.setState((prevState) => ({ count: prevState.count + 1 }));
//         };

//         render() {
//             const { count } = this.state;
//             return <OriginalComponent count={count} incrementCount={this.incrementCount} />;
//         }
//     }
//     return NewComponent;
// };

// export default withCounter;
