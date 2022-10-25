import React from 'react';
import ClickCounter from './component/ClickCounter';
import Content from './component/Content';
import Counter from './component/Counter';
import ThemeContext from './component/ThemeContext';

class App extends React.Component {
    state = {
        theme: 'dark',
    };

    switchTheme = () => {
      this.setState(({ theme }) => {
        if(theme === 'dark')
        {
          return { 
            theme: 'light', 
          };
        }
        else
        {
          return {
            theme: 'dark',
          };
        }
      });
    };

    render() {
      const { theme } = this.state;

      return (
        <div>
          <Counter>
            {(count, incrementCount) => (
              <ClickCounter count={count} incrementCount={incrementCount} />
            )}
          </Counter>

          <ThemeContext.Provider value={{theme:theme, switchTheme:this.switchTheme}}>
              <Content />
          </ThemeContext.Provider>
        </div>
      );
    }
}

export default App;
