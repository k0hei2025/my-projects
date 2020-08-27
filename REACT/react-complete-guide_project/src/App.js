import React, { Component } from 'react';

import './App.css';
import UserInput from "./userInput/userInput";
import UserOutput from "./userOutput/userOutput";

class App extends Component {
   state={
     username: "superMax"
  };
  buttonevent=(newname)=>{
    this.setState({
    username: newname.target.value
  })
  }
  render() {

    
    return (
      <div className="App">
     
         
          <h1 className="App-title">Welcome to React</h1>
          <UserInput currentName={this.state.username} change={this.buttonevent}  />
          <UserOutput name={this.state.username}    />
          <UserOutput  name={this.state.username}  />
          <UserOutput  name={this.state.username}  />
    
    
         
        
      </div>
    );
  };
} 

export default App;
//  {/*To get started, edit <code>src/App.js</code> and save to reload. */}