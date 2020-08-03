import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false
    }
  }

  handleLogin(params) {
    console.log('handleLogin', params)
  }

  render() {
    let render = null;
    if(this.state.isLogined) {
      render = <Dashboard></Dashboard>
    } else {
      render = <Login handleLogin={this.handleLogin}></Login>
    }

    return (
      <div className="App">
        {render}
      </div>
    );
  } 
}

export default App;
