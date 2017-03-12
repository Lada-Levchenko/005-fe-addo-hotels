(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var data = require('./data');

data.forEach(function (item) {
  var itemDiv = '<div class="panel panel-default">\n    <div class="panel-body">\n      <div class="media">\n        <div class="media-left">\n          <a href="#">\n            <img class="media-object thumbnail" src="src/img/' + item.image + '" alt="' + item.image + '">\n          </a>\n        </div>\n        <div class="media-body">\n          <a href="#" class="pull-right text-danger" aria-label="Close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\n          <h4 class="media-heading text-primary">' + item.name + '</h4>\n          <h3 class="pull-right">' + formatPrice(item.price) + '</h3>\n          <br />\n          ' + formatStars(item.stars) + '\n          <p class="text-muted">' + item.address + '</p>\n          <input class="btn btn-success pull-right" type="submit" value="Select">\n        </div>\n      </div>\n    </div>\n  </div>';
  document.getElementById("hotelsBlock").innerHTML += itemDiv;
});

function formatStars(stars) {
  var result = '<span class="text-warning">';
  for (var i = 0; i < stars; i++) {
    result += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
  }
  for (var _i = 5 - stars; _i > 0; _i--) {
    result += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>';
  }
  result += '</span>';
  return result;
}

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}

},{"./data":2}],2:[function(require,module,exports){
'use strict';

module.exports = [{
  id: 1,
  name: 'Amadeus',
  address: 'адрес1',
  stars: 4,
  price: 400,
  image: 'hotels/amadeus.jpg'
}, {
  id: 2,
  name: 'Paradise',
  address: 'адрес2',
  stars: 3,
  price: 300,
  image: 'hotels/paradise.jpg'
}, {
  id: 3,
  name: 'JustSomeHotel',
  address: 'адрес3',
  stars: 5,
  price: 500,
  image: 'hotels/JustSomeHotel.jpg'
}];

},{}]},{},[1]);
