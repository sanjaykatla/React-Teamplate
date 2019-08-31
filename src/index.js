import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WelCome extends Component {
    render () {
        return (
            <h1>Hello World from React Boiler plate code</h1>
        );
    }
}

ReactDOM.render(<WelCome />, document.getElementById("root"));

