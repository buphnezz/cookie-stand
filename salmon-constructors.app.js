


var avgNumCookiesPurchased = Math.ceil(Math.random()) * (3 - 1);

// We need an array to hold our dogs
var allStores = [];

// We need to access the table that is in the DOM
var storeTable = document.getElementById('stores');

// We need a constructor to make our dog objects
function Store(sixAm, sevenAm, eightAm, nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm, sixPm, sevenPm, eightPm) {
  this.sixAm = sixAm;
  this.sevenAm = sevenAm;
  this.eightAm = eightAm;
  this.nineAm = nineAm;
  this.tenA = tenAm;
  this.elevenAm = elevenAm;
  this.twelvePm = twelvePm;
  this.onePm = onePm;
  this.twoPm = twoPm;
  this.threePm = threePm;
  this.fourPm = fourPm;
  this.fivePm = fivePm;
  this.sixPm = sixPm;
  this.sevenPm = sevenPm;
  this.eightPm = eightPm;

  allStores.push(this);
}

// Let's refactor so that render() method is on the constructor's prototype; this will tidy up the way things look on the screen
Store.prototype.render = function () {
  // create tr
  var trEl = document.createElement('tr');
  // create td
  var tdEl = document.createElement('td');
  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
  tdEl.textContent = this.sixAm;
  // append td to tr
  trEl.appendChild(tdEl);
  // append tr to table

  tdEl = document.createElement('td');
  tdEl.textContent = this.sevenAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.eightAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.nineAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.tenAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.elevenAm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.twelvePm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.onePm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.twoPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.threePm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.fourPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.fivePm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.sixPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.sevenPm;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.eightPm;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
};

// We need a separate function to make the table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '6:00am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '7:00am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '8:00am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '9:00am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '10:00am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '11:00am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '12:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '1:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '2:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '3:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '4:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '5:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '6:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '7:00pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '8:00pm';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

// We need to create our Dog instances
var firstAndPike = new Store('First and Pike', Math.random(), 'Westie', 'Gare Bear');
var seaTacAirport = new Store('SeaTac Airport', 'White', 'Westie', 'Goose');
var seattleCenter = new Store('Seattle Center', 'Tan', 'French Bulldog', 'Ollie');
var capitolHill = new Store('Capitol Hill', 'Black', 'Labra-doodle', '');
var alki = new Store('Alki', 'Black and White', 'Border Collie', null);
// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows
makeHeaderRow();
firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();