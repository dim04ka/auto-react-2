import React, { Component } from 'react';
import './style.css'

export default class ReadItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            readItem: {
                "id": "",
                "name": "",
                "marka": "",
                "price": "",
                "country": "",
                "url": ""
            }
        }
    }
    componentDidMount() {
        this.update();
    }
    componentDidUpdate(prevProps) {
        if (this.props.readItem !== prevProps.readItem) {
            this.update();
        }
    }
    update = () => {
        this.setState({ readItem: this.props.readItem })
        const { name, marka, country, price, url } = this.props.readItem;
        this.refs.name.value = name;
        this.refs.marka.value = marka;
        this.refs.price.value = price;
        this.refs.country.value = country;
        this.refs.url.value = url;
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
            this.props.saveItem(item, this.state.readItem);
        } else {
            alert('Заполните все поля')
        }
    }
    cancel = () => {
        this.refs.name.value = "";
        this.refs.marka.value = "";
        this.refs.price.value = "";
        this.refs.country.value = "";
        this.refs.url.value = "";
        this.setState({
            readItem: {
                id: "",
                name: "",
                marka: "",
                price: "",
                country: "",
                url: ""
            }
        })
        this.props.cancelView();
    }
    render() {
        return (
            <React.Fragment>
                <div className="overlay"></div>
                <div className="ReadItem">
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
                        <button onClick={this.save}>Сохранить</button>
                        <button onClick={this.cancel}>Отмена</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
