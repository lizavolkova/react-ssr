import React, { Component } from 'react';
import '../App.css';
import Header from '../components/header';

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <Header>Welcome to React</Header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default HomePage;
