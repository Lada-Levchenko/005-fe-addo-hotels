var data = require('./data');

data.forEach((item)=> {
  var itemDiv =
  `<div class="panel panel-default">
    <div class="panel-body">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object thumbnail" src="src/img/${item.image}" alt="${item.image}">
          </a>
        </div>
        <div class="media-body">
          <a href="#" class="pull-right text-danger" aria-label="Close"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>
          <h4 class="media-heading text-primary">${item.name}</h4>
          <h3 class="pull-right">${formatPrice(item.price)}</h3>
          <br />
          ${formatStars(item.stars)}
          <p class="text-muted">${item.address}</p>
          <input class="btn btn-success pull-right" type="submit" value="Select">
        </div>
      </div>
    </div>
  </div>`
  console.log("id", item.id);
  console.log("stars", item.stars);
  console.log("price", new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price));
  console.log("image", item.image);
  document.getElementById("hotelsBlock").innerHTML += itemDiv;
});

function formatStars(stars){
  var result = '<span class="text-warning">';
  for(let i = 0; i < stars; i++){
    result += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>'
  }
  for(let i = 5 - stars; i > 0; i--){
    result += '<span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>'
  }
  result += '</span>';
  return result;
}

function formatPrice(price){
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}
