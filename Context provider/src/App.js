import React from 'react';
import './App.css';
import User from './Componenet/User';


export const Mycontext= React.createContext();

//provider component
class App extends React.Component {
  state = {
    name: 'Juhi Bhardwaj'
  }
  render() {
    return (
      <div>
       
        <Mycontext.Provider value={this.state.name}>
          <User/>
        </Mycontext.Provider> */}
      {/* <User name={this.state.name}/> */}

      </div>
    )
  }
}

export default App


