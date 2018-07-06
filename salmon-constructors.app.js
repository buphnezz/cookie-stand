var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// We need an array to hold our dogs
var allStores = [];

// We need to access the table that is in the DOM
var storeTable = document.getElementById('stores');

// We need to access the form from our index.html
var storeForm = document.getElementById('store-form');
console.log('Storeform test', storeForm);

function totalCookieFooter() {
  var tfootEl = document.createElement('tfoot'); // created a tfoot in my html doc
  console.log(tfootEl);
  var trEl = document.createElement('tr'); // created a <tr> in my html doc
  var tdEl = document.createElement('td');  // created a <td> in my html doc
  console.log(tdEl);
  tdEl.textContent = 'Total Cookies Sold Per Hour';  // inputting the data 'Total Cookies' into the <td> we just created in the HTML doc.
  trEl.appendChild(tdEl); //  append that Total Cookies data to the <tr> above it.


  for (var hour = 0; hour < hoursOfOperation.length; hour++) {
    console.log(hoursOfOperation[hour]);
    var runningTotal = 0;
    for (var store = 0; store < allStores.length; store++) {
      console.log(allStores[store]);
      allStores[store].salesPerEachHour[hour];
      console.log(allStores[store].salesPerEachHour[hour]);
      runningTotal += allStores[store].salesPerEachHour[hour]; // += keeps adding to the previous total.
      console.log(runningTotal);
    }

    var tdEl = document.createElement('td');  // created a <td> in my html doc
    console.log(tdEl);
    tdEl.textContent = runningTotal;  // inputting the data 'Total Cookies' into the <td> we just created in the HTML doc.
    trEl.appendChild(tdEl); //  append that Total Cookies data to the <tr> above it.
  }

  var grandTotal = 0;
  for (var i = 0; i < allStores.length; i++) {
    console.log('this shows all stores', allStores[i]);
    console.log(allStores[i].totalCookies);
    grandTotal += allStores[i].totalCookies;
    console.log(grandTotal);
  }
  var tdEl = document.createElement('td');  // created a <td> in my html doc
  console.log(tdEl);
  tdEl.textContent = grandTotal;  // inputting the data 'Total Cookies' into the <td> we just created in the HTML doc.
  trEl.appendChild(tdEl); //  append that Total Cookies data to the <tr> above it.
  tfootEl.appendChild(trEl);  // appending/attaching that row to my <tfoot>
  storeTable.appendChild(tfootEl);  // append the tfootEl to the table.

}

// We need a constructor to make our dog objects
function Store(nameOfStore, minCustomers, maxCustomers, avgCookiesSold) {
  this.nameOfStore = nameOfStore;
  this.minCustomers = minCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.maxCustomers = maxCustomers;
  this.salesPerEachHour = [];
  this.totalCookies = 0;

  this.numOfCustomers = function () {
    var avgFirstandPikeCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)
    return avgFirstandPikeCustomers;
  };

  this.cookiesSoldPerEachHour = function () {
    for (var cookieCounter = 0; cookieCounter < hoursOfOperation.length; cookieCounter++) {

      var avgCookiesPurchased = Math.floor(this.numOfCustomers() * this.avgCookiesSold);
      this.salesPerEachHour.push(avgCookiesPurchased)

      this.totalCookies = this.totalCookies + avgCookiesPurchased;
      console.log('total cookies ', this.totalCookies)
    }
  };


  //for avgcookiespurchased * every hour = total. 
  this.cookiesSoldPerEachHour();

  allStores.push(this);

}

// Let's refactor so that render() method is on the constructor's prototype; this will tidy up the way things look on the screen
Store.prototype.render = function () {
  // create tr
  var trEl = document.createElement('tr');
  // create td
  var tdEl = document.createElement('td');
  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
  tdEl.textContent = this.nameOfStore;
  // append td to tr
  trEl.appendChild(tdEl);
  // append tr to table

  for (var i = 0; i < this.salesPerEachHour.length; i++) {
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.salesPerEachHour[i];
  }


  tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = this.totalCookies;

  storeTable.appendChild(trEl);
};

// We need a separate function to make the table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < hoursOfOperation.length; i++) {
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hoursOfOperation[i];
  }
  var thEl = document.createElement('th');
  thEl.textContent = 'Total:';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
}

function renderAllStores() {
  for (var i in allStores) {
    allStores[i].render();
  }
}

function addNewStore(event) {
  console.log('inside of event');
  event.preventDefault();
  console.log(event.target.storeName.value);
  var newStoreName = event.target.storeName.value;
  var newMinCustomers = event.target.minCustomers.value;
  var newMaxCustomers = event.target.maxCustomers.value;
  var newAvgCookiesSold = event.target.avgCookiesSold.value;

  new Store(newStoreName, newMinCustomers, newMaxCustomers, newAvgCookiesSold);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  totalCookieFooter();
}

storeForm.addEventListener('submit', addNewStore);
alert('The button press worked');
console.log(addNewStore);

// We need to create our Dog instances
var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// var table = document.getElementById("stores");
// var footer = table.createTFoot();
// var row = footer.insertRow(0);
// var cell = row.insertCell(0);
// cell.innerHTML = "<b>Total Cookies Sold</b>";


makeHeaderRow();
renderAllStores();
totalCookieFooter();
function myMap() {
  var mapOptions = {
    center: new google.maps.LatLng(47.608013, -122.335167),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
} 
