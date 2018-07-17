import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import '../App.css';

const LinkWrapper = styled.div`
    a {
        color: white;
        padding: 5px;
    }
`;

class Header extends Component {
    render() {
        return (
        <header className="App-header">
            <Link to="/">
                <img src="/images/logo.svg" className="App-logo" alt="logo" />
            </Link>
            <h1 className="App-title">{this.props.children}</h1>
            <LinkWrapper>
                <Link to="/second">Second Page</Link>
                <Link to="/server">Server Page</Link>
            </LinkWrapper>
        </header>
        );
    }
}

export default Header;
