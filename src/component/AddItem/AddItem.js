import React, { Component } from 'react';
import './style.css'

export default class AddItem extends Component {
    cancel = () => {
        this.props.cancelItem()
    }
    save = () => {
        const name = this.refs.name.value;
        const marka = this.refs.marka.value;
        const price = this.refs.price.value;
        const country = this.refs.country.value;
        const url = this.refs.url.value;
        if ([name, marka, country, price, url].every(p => p !== "")) {
            const item = {
                name,
                marka,
                price,
                country,
                url
            }
            this.props.addItem(item);
            this.cancel();
        } else {
            alert('Заполните все поля')
        }
    }
    render() {
        return (
            <>
                <div className="overlay"></div>
                <div className="AddItem">
                    <div> Название
                    <input ref="name"></input>
                    </div>
                    <div> Марка
                    <input ref="marka"></input>
                    </div>
                    <div> Цена
                    <input ref="price"></input>
                    </div>
                    <div> Производитель
                    <input ref="country"></input>
                    </div>
                    <div> url фото
                    <input ref="url"></input>
                    </div>
                    <div>
                        <button onClick={this.save}>Добавить </button>
                        <button onClick={this.cancel} >Отмена</button>
                    </div>
                </div>
            </>
        )
    }
}
