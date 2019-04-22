import React, { Component } from 'react';
import './App.css';

export class Title extends Component {
    render() {
        return (
            <div className = 'title'>
                <ul>
                    <li><h1>HighOnCoding</h1></li>
                    <li><b>Home</b></li>
                    <li>Categories</li>
                </ul>                
            </div>
        )
    }
}

