import React from "react";

class Welcome extends React.Component {
    state = {
      name: "Sara",
      age: 40
    };
    handleClick=()=>this.setState({age:'70'})
    render() {
      return (
      <>
        <h1>hello {this.state.name} i am {this.state.age}</h1>;
      <button onClick={this.handleClick}> ClickMe</button>
      </>)
    }
   }
   export default Welcome;