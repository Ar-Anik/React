import React from 'react';
import ClickCounter from './Component/ClickCounter';
import Content from './Component/Content';
import Counter from './Component/Counter';
import ThemeContext from './Component/ThemeContext';

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

        <ThemeContext.Provider value={{theme: theme}}><Content /></ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
