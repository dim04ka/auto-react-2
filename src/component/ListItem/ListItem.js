import React, { Component } from 'react';
import ItemAuto from '../ItemAuto/ItemAuto'
import './style.css'


export default class ListItem extends Component {
    render() {
        return (
            <div className="ListItem">
                {
                    this.props.state.map((item, index) => {
                        return (
                            <ItemAuto key={index} itemAuto={item} />
                        );
                    })
                }
            </div>
        )
    }
}

