import React from 'react';
import ReactDOM from 'react-dom';
import Star from './components/star';
import Icon from './components/icon';
import Form from './components/form';
import Data from './data';

let data = Data.slice(0);



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data
    };
  }

  renderStars(stars) {
    let starComponents = [];
    for (var i = 0; i < 5; i++) {
      if (i < stars) {
        starComponents.push(<Star key={i.toString()} />);
      } else {
        starComponents.push(<Star key={i.toString()} empty={true} />);
      }
    }
    return (<span className="text-warning" children={starComponents} />);
  }

  formatPrice(price){
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
  }

  renderItem(item) {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="media">
            <div className="media-left">
              <a href="#">
                <img className="media-object thumbnail" src={"src/img/" + item.image} alt="{item.image}" />
              </a>
            </div>
            <div className="media-body">
              <Icon method={this.removeHotel.bind(this, item.id)} />
              <h4 className="media-heading text-primary">{item.name}</h4>
              <h3 className="pull-right">{this.formatPrice(item.price)}</h3>
              <br />
              {this.renderStars(item.stars)}
              <p className="text-muted">{item.address}</p>
              <input className="btn btn-success pull-right" type="submit" value="Select" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  removeHotel(id){
    console.log('remove ' + id);
    data = data.filter(function(el) {
      return el.id !== id;
    });
    this.state.list = data;
    renderApp();
  }

  addHotel(){
    let form = document.getElementById("hotelForm");
    data.push({
      id: data.length + 1,
      name: form.hotelName.value,
      address: form.address.value,
      stars: form.stars.value,
      price: form.price.value,
      image: 'hotels/amadeus.jpg'
    });
    form.reset();
    this.state.list = data;
    renderApp();
  }

  render() {
    let list = this.state.list.map(item=>{
        return this.renderItem.call(this, item);
    });
    return (
      <span>
        <div className="row" children={list} />

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <Form method={this.addHotel.bind(this)}/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </span>
    );
  }
}


function renderApp(){
  ReactDOM.render(
    <App />,
    document.getElementById('hotels')
  );
}
renderApp();
