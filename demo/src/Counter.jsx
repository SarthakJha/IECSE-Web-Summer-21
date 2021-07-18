// A file with .jsx implies it is a React component.
// .js also works 

import React, { Component } from 'react'

// This is a class component
export default class Counter extends Component {
    
    constructor(props) {
        // The constructor is used to initialize state
        super(props);
        this.state = {
            count:this.props.initialCount
        };
        // Here we are setting the initial count to 
        // whatever we recieve from props
      }

      // The functions we define in class components
      // have to be => functions otherwise "this" context will be lost
     handleIncrement = ()=>{

        // setState is used to change the state of a component.
        // state should never be changed directly
        this.setState({
            count:this.state.count+1
        })
        // setState will trigger a re render of the component
      }

      handleDecrement= ()=>{
        this.setState({
            count:this.state.count-1
        }) 
      }
    
    componentDidMount(){
        // This lifecycle method is called when the
        // component is loaded for the first time
        console.log("Counter is mounted");
    }

    componentDidUpdate(){
        // This lifecycle method is called when the
        // component is updated. Every time state is
        // changed a component updates
        console.log("Counter is updated");
        console.log(`The current count is ${this.state.count}`);

    }

    
    // In class components the render method returns the JSX whereas in a functional component , 
    // the JSX is returned from the funtion itself
    render() {
        return (
            <div className="counter" >
                The current Count is {this.state.count}
                {/* We have 3 buttons that can be used to change the state */}
                <div className="buttons">
                <button onClick={this.handleIncrement} className="button">Increment</button>
                <button onClick={this.handleDecrement} className="button">Decrement</button>
                {/* Here we are binding the event onClick to our custom funtion */}
                {/* We can write this funtion directly inline, also called anonymous funtion like below */}
                <button onClick={()=>{
                    this.setState({
                        // Here we are resetting the count to its inital value
                        // which we got from props
                        count:this.props.initialCount
                    }) 
                }} className="button">Reset</button>
                </div>
            </div>
        )
    }
}
