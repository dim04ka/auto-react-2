import React, { Component } from 'react';

import './App.css';
import Table from './component/Table/Table'
import ReadItem from './component/ReadItem/ReadItem'
import Buttons from './component/Buttons/Buttons'
import ListItem from './component/ListItem/ListItem'


export default class App extends Component {

  state = {

    auto: [
      {
        "id": 1,
        "name": "Авто №1",
        "marka": "Audi",
        "price": 33540,
        "country": "Германия",
        "url": "https://finance.liga.net/images/general/2018/08/29/thumbnail-tw-20180829113845-1826.jpg"
      },
      {
        "id": 2,
        "name": "Авто №2",
        "marka": "Bently",
        "price": 33220,
        "country": "Франция",
        "url": "https://icdn.lenta.ru/images/2017/08/23/14/20170823145604779/pic_b21fd6a6551e45ce4a397c3c2662ec8f.jpg"
      },
      {
        "id": 3,
        "name": "Авто №3",
        "marka": "Mercedes",
        "price": 36750,
        "country": "Беларусь",
        "url": "https://velikan-auto.ru/img/car.png"
      },
      {
        "id": 4,
        "name": "Авто №4",
        "marka": "Марка машины №4",
        "price": 32320,
        "country": "Германия",
        "url": "http://kimuracars.com/ifiles/articles/066/dodge-challenger-srt8.jpg"
      },
      {
        "id": 5,
        "name": "Авто №5",
        "marka": "Марка машины №5",
        "price": 42450,
        "country": "Германия",
        "url": "https://finance.liga.net/images/general/2018/08/29/thumbnail-tw-20180829113845-1826.jpg"
      },
      {
        "id": 6,
        "name": "Авто №6",
        "marka": "Марка машины №6",
        "price": 20232,
        "country": "Россия",
        "url": "https://wrapmenow.ru/wp-content/uploads/okleyka-kamuflyash-1.jpg"
      },
      {
        "id": 7,
        "name": "Авто №7",
        "marka": "Марка машины №7",
        "price": 50222,
        "country": "Германия",
        "url": "https://i.io.ua/img_su/large/0094/39/00943988_n6.jpg"
      },
      {
        "id": 8,
        "name": "Авто №8",
        "marka": "Марка машины №8",
        "price": 20200,
        "country": "Германия",
        "url": "https://bipbap.ru/wp-content/uploads/2017/09/122916_037145701590.jpg"
      },
      {
        "id": 9,
        "name": "Авто №9",
        "marka": "Марка машины №9",
        "price": 12250,
        "country": "Россия",
        "url": "https://finance.liga.net/images/general/2018/08/29/thumbnail-tw-20180829113845-1826.jpg"
      },
      {
        "id": 10,
        "name": "Авто №10",
        "marka": "Марка машины №10",
        "price": 22220,
        "country": "Франция",
        "url": "http://diesel.elcat.kg/uploads/monthly_01_2019/post-384295-0-63794700-1546939379.jpg"
      },
      {
        "id": 11,
        "name": "Авто №11",
        "marka": "Марка машины №11",
        "price": 53230,
        "country": "Russia",
        "url": "https://auto-arenda.kiev.ua/wp-content/uploads/2016/03/viber-image-01.jpg.pagespeed.ce.Xy2r2THZBG.jpg"
      },
      {
        "id": 12,
        "name": "Авто №12",
        "marka": "Марка машины №12",
        "price": 20311,
        "country": "Франция",
        "url": "http://gorodvitebsk.by/images_data/122c464db19a21e35c636af3f7749987_big.jpg"
      },
    ],
    readItem: {
      "id": "",
      "name": "",
      "marka": "",
      "price": "",
      "country": "",
      "url": ""
    },
    panelReadView: false,
    tableToggle: false
  }
  deleteItem = (id) => {
    const auto = this.state.auto.filter((el) => el.id !== id)
    this.setState({ auto })
  }
  updateItem = (id) => {
    const readItem = this.state.auto.find((el) => el.id === id)
    this.setState({
      readItem,
      panelReadView: true
    })
  }
  saveItem = (item, obj) => {
    const { auto } = this.state;
    const cloneAuto = [...auto];
    const contact = cloneAuto.find(auto => auto.name === obj.name);
    contact.name = item.name;
    contact.marka = item.marka;
    contact.price = item.price;
    contact.country = item.country;
    contact.url = item.url;
    this.setState({
      auto: cloneAuto,
      panelReadView: false
    });
  }
  addItem = (item) => {
    console.log(item.name, item.marka);
    const length = this.state.auto.length;
    const addAuto = {
      id: length ? this.state.auto[length - 1].id + 1 : 1,
      name: item.name,
      marka: item.marka,
      price: item.price,
      country: item.country,
      url: item.url
    }
    this.setState(({ auto }) => {
      const NewArray = [
        ...auto,
        addAuto
      ]
      return {
        auto: NewArray
      }
    })
  }
  cancelView = () => {
    this.setState({
      panelReadView: false
    })
  }
  tableToggle = () => {
    const tableToggle = !this.state.tableToggle
    this.setState({
      tableToggle
    })
  }
  render() {
    return (
      <div className="Wrapper">
        <Buttons addItem={this.addItem} />
        {
          this.state.auto.length ?
            <button onClick={this.tableToggle}>{this.state.tableToggle ? 'Свернуть таблицу' : 'Показать таблицу'}</button> :
            null
        }
        {
          this.state.panelReadView ?
            <ReadItem readItem={this.state.readItem} saveItem={this.saveItem} cancelView={this.cancelView} /> :
            null
        }
        {
          this.state.auto.length && this.state.tableToggle ?
            <Table deleteItem={this.deleteItem}
              updateItem={this.updateItem}
              state={this.state.auto} /> :
            null
        }
        <ListItem state={this.state.auto} />
      </div>
    );
  }
}
