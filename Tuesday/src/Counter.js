import React, {Component} from 'react';
import './App.css';

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemField: '',
            pendingItemList: [],
            completedItemList: []
        }
    }

    onChangeTextField = (e) => {
        this.setState({
            itemField: e.target.value
        })
    }

    addItem = () => {
        if(this.state.itemField){
            this.setState({
                pendingItemList: this.state.pendingItemList.concat(this.state.itemField),
                itemField: ''
            })
        }
        else{
            alert('Please enter a task lol')
        }

    }

    markAsCompleted = (key) => {
        let itemCompleted = this.state.pendingItemList[key]
        let newPendingList = this.state.pendingItemList.filter(x => x !== itemCompleted)
        this.setState({
            pendingItemList: newPendingList,
            completedItemList: this.state.completedItemList.concat(itemCompleted)
        })
    }

    markAsIncomplete = (key) => {
        let itemIncompleted = this.state.completedItemList[key]
        let newCompletedList = this.state.completedItemList.filter(x => x !== itemIncompleted)
        this.setState({
            completedItemList: newCompletedList,
            pendingItemList: this.state.pendingItemList.concat(itemIncompleted)
        })
    }


    render() {
        return (
        <div>
            <input value = {this.state.itemField} onChange = {this.onChangeTextField} placeholder = 'Enter Task...'></input>
            <button onClick = {this.addItem}>Add</button>
            <h1>Tasks You Need To Do:</h1>
            <List markAsCompleted = {this.markAsCompleted} pendingItemList = {this.state.pendingItemList} />
            <h1>Tasks You've Completed</h1>
            <CompletedList markAsIncomplete = {this.markAsIncomplete} completedItemList = {this.state.completedItemList} />
        </div>
        )
    }
}


class List extends Component {
    render(){
        return (
            <div>
                {this.props.pendingItemList.map((item, index) => {
                    return (
                        <div>
                        <li key = {index}>{item}</li>
                        <button onClick = {() => this.props.markAsCompleted(index)}>Completed</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class CompletedList extends Component {
    render(){
        return (
            <div>
                {this.props.completedItemList.map((item, index) => {
                    return (
                        <div>
                        <li key = {index}>{item}</li>
                        <button onClick = {() => this.props.markAsIncomplete(index)}>Incomplete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}