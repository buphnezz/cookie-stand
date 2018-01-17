var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


// We need an array to hold our dogs
var allStores = [];

// We need to access the table that is in the DOM
var storeTable = document.getElementById('stores');

// We need to access the form from our index.html
var storeForm = document.getElementById('store-form');

// We need a constructor to make our dog objects
function Store(nameOfStore, minCustomers, maxCustomers, avgCookiesSold) {
  this.nameOfStore = nameOfStore;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.salesPerEachHour = [];
  this.totalCookies = 0;

  this.numOfCustomers = function () {
    var avgFirstandPikeCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers)
    return avgFirstandPikeCustomers;
  };

  this.cookiesSoldPerEachHour = function () {
    for (var cookieCounter = 0; cookieCounter < hoursOfOperation.length; cookieCounter++) {

      var avgCookiesPurchased = this.numOfCustomers() * this.avgCookiesSold;
      this.salesPerEachHour.push(avgCookiesPurchased)

      this.totalCookies = this.totalCookies + avgCookiesPurchased;
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
    for(var i in allStores) {
      allStores[i].render();
    }
  }

  function addNewStore(event) {
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




  }
// We need to create our Dog instances
var firstAndPike = new Store ('First and Pike', 23, 65, 6.3);
var seaTacAirport = new Store ('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store ('Capitol Hill', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);

makeHeaderRow();
firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();