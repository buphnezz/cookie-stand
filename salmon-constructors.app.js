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
Dog.prototype.render = function () {
  // create tr
  var trEl = document.createElement('tr');
  // create td
  var tdEl = document.createElement('td');
  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
  tdEl.textContent = this.name;
  // append td to tr
  trEl.appendChild(tdEl);
  // append tr to table

  tdEl = document.createElement('td');
  tdEl.textContent = this.color;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.breed;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.nickname;
  trEl.appendChild(tdEl);

  dogTable.appendChild(trEl);
};

// We need a separate function to make the table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Breed';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Nickname';
  trEl.appendChild(thEl);

  dogTable.appendChild(trEl);
}

// We need to create our Dog instances
var gary = new Dog('Gary', 'White', 'Westie', 'Gare Bear');
var charlotte = new Dog('Charlotte', 'White', 'Westie', 'Goose');
var ollie = new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
var buddy = new Dog('Buddy', 'Black', 'Labra-doodle', '');
var demi = new Dog('Demi', 'Black and White', 'Border Collie', null);

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows
makeHeaderRow();
gary.render();
charlotte.render();
ollie.render();
buddy.render();
demi.render();