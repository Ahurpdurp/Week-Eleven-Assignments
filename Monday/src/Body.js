import React, { Component } from 'react';
import './App.css'

export class Body extends Component {
    render() {
        return (
            <div className = 'body'>
                {this.props.list.map(item => {
                    return (
                    <div>
                        <h1>{item.header}</h1>
                        <p>{item.body}</p>
                        <ul>                        
                            <li>{item.comments} comments</li>
                            <li>{item.likes} likes</li> 
                        </ul>
                    </div>   
                        )
                })}
            </div>
        )
    }
}

