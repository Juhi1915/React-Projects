import React, { Component } from 'react'
import Hoc from './Hoc.js';

class Comp extends Component {

    state = { showError: false }
  
    Error = () => {
      this.setState((prevState, props) => {
        return { showError: !prevState.showError }
      })
    };
    render() {
        return (
          
                <div>
        {this.state.showError && 
        <div 
        >
          
           <h1>{this.props.add}</h1> 
           
        </div>}
                <h6> Handle by high order component</h6>
                <button onClick={this.Error}>Error</button>
                {this.state.showError && <div
                >
                    
                </div>}
            </div>
        );
    }
}

export default Hoc(Comp);
