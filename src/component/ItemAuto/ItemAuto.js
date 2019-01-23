import React, { Component } from 'react';
import './style.css'

export default class ItemAuto extends Component {
  render() {
    return (
      <div className="ItemAuto">
        <div className="ItemAuto__name">{this.props.itemAuto.name}</div>
        <div>{this.props.itemAuto.marka}</div>
        <div>{this.props.itemAuto.country}</div>
        <div><img src={this.props.itemAuto.url} alt={this.props.itemAuto.name} className="ItemAuto__img" /></div>
        <div>{this.props.itemAuto.price} $</div>
      </div>
    );
  }
}

