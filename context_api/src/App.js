//= //=========> This is for Component Folder <==========
// import React from 'react';
// import Counter from './Component/Counter';
// import ClickCounter from './Component/ClickCounter';
// import Section from './Component/Section';

// class App extends React.Component{
//   state = {
//     theme: 'dark',
//   };

//   render(){
//     const {theme} = this.state;

//     return (
//       <div className="app">
//         <Counter>
//           {(count, incrementCount) => (
//             <ClickCounter count={count} incrementCount={incrementCount} />
//           )}
//         </Counter>

//         <Section theme={theme} />
//       </div>
//     );
//   }

// }

// export default App;

import React from 'react';
import ClickCounter from './MakeContextApi/ClickCounter';
import Counter from './MakeContextApi/Counter';
import Section from './MakeContextApi/Section';
import ThemeContext from './MakeContextApi/ThemeContext';

class App extends React.Component{
  state = {
    theme: 'dark',
  };

  render(){
    const { theme } = this.state;
    
    return (
      <div>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>

        <ThemeContext.Provider value={{theme: theme}}><Section /></ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
