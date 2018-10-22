import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import './App.css';
import Home from './pages/home'
// import logo from './logo.svg';
// import Header from './module/template/Header';
// import Footer from './module/template/Footer'



class Title extends Component {  
  render() {
    return (
      'Places'
    );
  }
} 

class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
          <Home></Home>
      </MuiThemeProvider>
    )
  }
}

export default App;
export {Title};

