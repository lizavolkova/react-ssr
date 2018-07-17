import React, { Component } from 'react';
import Header from '../components/header';
import Carousel from '../components/carousel';
import '../App.css';

class ServerPage extends Component {
    render() {
        return (
            <div className="App">
                <Header>SERVER SIDE Page</Header>
                <Carousel />
            </div>
        );
    }
}

export default ServerPage;
