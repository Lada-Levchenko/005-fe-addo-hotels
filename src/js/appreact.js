import React from 'react';
import ReactDOM from 'react-dom';
var data = require('./data');

let element = data.map((item)=>
  (<div class="panel panel-default">
    <div class="panel-body">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object thumbnail" src="src/img/{item.image}" alt="${item.image}" />
          </a>
        </div>
        <div class="media-body">
          <a href="#" class="pull-right text-danger" aria-label="Close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
          <h4 class="media-heading text-primary">{item.name}</h4>
          <h3 class="pull-right">{formatPrice(item.price)}</h3>
          <br />
          <Stars stars={item.stars} />
          <p class="text-muted">{item.address}</p>
          <input class="btn btn-success pull-right" type="submit" value="Select" />
        </div>
      </div>
    </div>
  </div>)
);

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function Stars(props){
  return (
    <span class="text-warning">
      <Repeat numTimes={props.stars}>
        {<span class="glyphicon glyphicon-star" aria-hidden="true"></span>}
      </Repeat>
      <Repeat numTimes={5 - props.stars}>
        {<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>}
      </Repeat>
    </span>
  );
}

function formatPrice(price){
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}

ReactDOM.render(
  element,
  document.getElementById('hotels')
);
