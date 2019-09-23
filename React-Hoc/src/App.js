import React from 'react';
import Comp from './Comp';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 0
      }
      this.increament = this.increament.bind(this)
      this.decreament = this.decreament.bind(this)
   };
   increament() {
      this.setState({data: this.state.data + 1})
   }
decreament(){
  this.setState({data:this.state.data - 1 })
}

   render() {
      return (
         <div>
            <h1>Hello React:Component Life Cycle</h1>
            <button onClick = {this.increament} >INCREMENT</button>
            
            {/* <Content myNumber = {this.state.data}></Content> */}
            <h3>{this.state.data}</h3>
            <button onClick = {this.decreament}>Decreament</button>
        
         <Comp/>
       
         </div>
      );
   }
}
export default App;