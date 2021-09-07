import { render } from "@testing-library/react";
import React, { Component } from "react";

class Counter extends Component { 
  render() {
    return (
      <div>  
       <span className="btn btn-warning m-2 ">{this.formateCount()}</span>
         <button
          onClick={()=>this.props.onIncrement(this.props.counter)} 
         className="btn btn-primary ">Increment
         </button>
         <button
          onClick={()=>this.props.onDelete(this.props.id)}
         className="btn btn-danger m-2">Delete
         </button>
      </div>
    );
  }

  formateCount(){
      const {value} =this.props;
      return value === 0? "Zero":value;
  }
}
export default Counter;






