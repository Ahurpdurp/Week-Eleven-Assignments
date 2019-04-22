import React, { Component } from 'react';
import './App.css';
import {Title} from './Title.js'
import {Intro} from './Intro.js'
import {Body} from './Body.js'

class App extends Component {
  constructor() {
    super()
    this.items = 
      [
        {
          header:"Hello WatchKit",
          body:"Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 \
          beat SDK release. The WatchKit framework enables the developers to create Apple Watch apps. In this article, we're \
          going to focus on the basics of getting started with the WatchKit framework.",
          comments:12,
          likes:124,
        },
        {
          header:"Introduction to Swift",
          body:"Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX \
          applications. Swift is a fairly new language and still in development, but it clearly reflects the intentions \
          and the future direction. This article will revolve around the basics concepts in the Swift and how you can get started :)",
          comments:15,
          likes:45
        }
      ]  
  }

  render() {
    return (
      <div>
        <Title />
        <Intro />
        <Body list = {this.items}/>
      </div>
    );
  }
}

export default App;
