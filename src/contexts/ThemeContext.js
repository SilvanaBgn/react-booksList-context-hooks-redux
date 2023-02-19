import React, {createContext} from 'react';

// When we create a Context, we must create a Provider, that is a tag that surrounds all the component tree that we want it to access that Context

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#DDD', bg: '#EEE' },
    dark: { syntax: '#DDD', ui: '#333', bg: '#555' }
  };

  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider