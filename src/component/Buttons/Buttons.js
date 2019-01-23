import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem'
import './style.css'

export default class Buttons extends Component {
    state = {
        open: false
    }
    open = () => {
        this.setState({
            open: true
        })
    }
    cancelItem = () => {
        this.setState({
            open: false
        })
    }
    render() {
        return (
            this.state.open ?
                <AddItem state={this.state} cancelItem={this.cancelItem} addItem={this.props.addItem} /> :
                <button onClick={this.open} className="Buttons__btn">Добавить авто </button>
        )
    }
}


