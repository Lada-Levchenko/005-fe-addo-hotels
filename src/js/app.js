import Data from './data';

let data = Data.slice(0);

document.getElementById("hotelSubmit").addEventListener("click", function () { addHotel(document.getElementById("hotelForm")); }, false);

function renderHotels(){
  document.getElementById('hotelsBlock').innerHTML = '';
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
            <a href="#" id="remove${item.id}" class="pull-right text-danger" aria-label="Close">
              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </a>
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
    document.getElementById("hotelsBlock").innerHTML += itemDiv;
  });
  data.forEach((item)=> {
    document.getElementById("remove" + item.id).addEventListener("click", function () { removeHotel(item.id) }, false);
  });
}

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

function removeHotel(id){
  console.log('remove ' + id);
  data = data.filter(function(el) {
    return el.id !== id;
  });
  renderHotels();
}

function addHotel(form){
  data.push({
    id: data.length,
    name: form.hotelName.value,
    address: form.address.value,
    stars: form.stars.value,
    price: form.price.value,
    image: 'hotels/amadeus.jpg'
  });
  form.reset();
  renderHotels();
}

renderHotels();
