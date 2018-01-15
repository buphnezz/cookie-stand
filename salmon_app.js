'use strict';

// create a shop object
// stores min, max and average cookies per customer in the object properties
// use a method of the shop object to genereate a random number of cookies per hour
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//Store the results for each location in a separate array...perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser

// all shops are open from 6am to 8pm so I made it a global variable
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 

// need the number of customers each hour, so let's make a random number generator
var randomNumOfCustomers = Math.floor(Math.random() * 150);

// 1.  1st and Pike shop object literal
var firstAndPike = {
  customers: [randomNumOfCustomers, randomNumOfCustomers,],
//   shopInfo: ['minCustomers', 'maxCustomers', 'avgNumOfCookiesPurchased']
render: function () {
  var ulEl = document.getElementById('firstAndPikeShop');

  for (var i = 0; i < hoursOfOperation.length; i++) {
    // 1. create a list of items (create the element)
    var liEl = document.createElement('li');
    // 2. give the li element content
    liEl.textContent = this.customers[i];
    // 3. append the li to the ul (append the element to the DOM)
    ulEl.appendChild(liEl);
  }

}  
//   minCustomers: ,
//   maxCustomers: ,
//   avgCookiesPerCustomer: 
}


// 2.  SeaTac Airport   shop object literal
// 3. Seattle Center shop object literal
// 4. Capital Hill shop object literal
// 5. Ali  shop object literal

firstAndPike.render();