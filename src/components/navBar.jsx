import React, { Component } from 'react';

class navBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Counter {""} 
                <span className=" badge badge-secondary m-2">
                {this.props.totalCount}</span>
                </a>
            </nav>
         );
    }
}
 
export default navBar;