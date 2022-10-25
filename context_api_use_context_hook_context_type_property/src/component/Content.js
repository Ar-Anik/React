import React from 'react';
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./ThemeContext";

// Way -- 1
// function Content() {
//     return (
//         <div>
//             <h1>This Comes From Content Function.</h1>
//             <Counter>
//                 {(count, incrementCount) => (
//                     <ThemeContext.Consumer>
//                         {({ theme, switchTheme }) => (
//                             <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
//                         )}
//                     </ThemeContext.Consumer>
//                 )}
//             </Counter>
//         </div>
//     );
// }

// Way -- 2
// class Content extends React.Component{
//     componentDidMount(){
//         console.log(this.context);
//     }

//     render(){
//         const { theme, switchTheme } = this.context;

//         return (
//             <div>
//                 <h1>This Comes From Content Function.</h1>

//                 <Counter>
//                     {(count, incrementCount) => (
//                         <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
//                     )}
//                 </Counter>
//             </div>
//         );
//     }
// }

// Content.contextType = ThemeContext;


// Way -- 3
// function Content(){
//     const context = useContext(ThemeContext);
//     const { theme, switchTheme } = context;

//     return (
//         <div>
//             <h1>This Comes From Content Function.</h1>

//             <Counter>
//                 {(count, incrementCount) => (
//                     <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
//                 )}
//             </Counter>
//         </div>
//     );
// }



class Content extends React.Component{

    componentDidMount(){
        console.log(this.context.theme);
        console.log(this.context.switchTheme);
    }

    render(){
        const { theme, switchTheme } = this.context;

        return (
            <div>
                <h1>This Comes From Content Class.</h1>

                <Counter>
                    {(count, incrementCount) => (
                        <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                    )}
                </Counter>
            </div>
        );
    }
}

Content.contextType = ThemeContext;

export default Content;
