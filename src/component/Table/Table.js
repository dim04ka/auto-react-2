import React, { Component } from 'react';
import './style.css'

export default class Table extends Component {
    delItem = (id) => {
        this.props.deleteItem(id);
    }
    update = (id) => {
        this.props.updateItem(id);
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Название</th>
                        <th>Марка</th>
                        <th>Цена</th>
                        <th>Производитель</th>
                        <th>url фото</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.state.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.marka}</td>
                                    <td>{item.price}</td>
                                    <td>{item.country}</td>
                                    <td><img src={item.url} alt={item.name} className="Table__img" /></td>
                                    <td>
                                        <button onClick={() => this.update(item.id)}>
                                            <i className="fa fa-pencil" />
                                        </button>
                                        <button onClick={() => this.delItem(item.id)}>
                                            <i class="fa fa-trash" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
