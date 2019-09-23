import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:""
    };
  
  this.textInput =React.createRef();
  };
  
  // componentDidMount =()  =>{
  //   // console.log(this.textInput);
  //   this.textInput.current.focus();
  // }
  handleSubmit = e =>
  {
    debugger;
    e.preventDefault();
    console.log(this.textInput.current.value);
    this.setState({value:this.textInput.current.value})

  };
  
  render() {
    return (
  
      <div>
        
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit ={this.handleSubmit}>
           
            <p className="h4 text-center mb-4">Sign up
            <h2>Welcome -:{this.state.value}</h2>
            </p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text"
          
            >
              Your name
            </label>
            <input
            
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              ref = {this.textInput}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              
            />
            <div className="text-center mt-4">
              <input type = "submit" value="submit" />
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>
     
    )
  }
}

export default App

