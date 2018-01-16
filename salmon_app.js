'use strict';

// create a shop object
// stores min, max and average cookies per customer in the object properties
// use a method of the shop object to genereate a random number of cookies per hour
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//Store the results for each location in a separate array...perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser

// all shops are open from 6am to 8pm so I made it a global variable
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']; 

// I'm currently not using minNumberCookies or maxNumberCookies... I used that equation in min/max number of customers instead.  Go ahead and delete both for now.
// var minNumberCookies = Math.floor(Math.random() * (50 - 0));

// var maxNumberCookies = Math.floor(Math.random() * (150 - 51));

var avgNumCookiesPurchased = Math.ceil(Math.random()) * (3 - 1);

// need the number of customers each hour, so let's make a random number generator
// need avg number of customers per hour * avg number of cookie purchased
var minNumOfCustomersSixAm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersSixAm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersSevenAm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersSevenAm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersEightAm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersEightAm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersNineAm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersNineAm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersTenAm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersTenAm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersElevenAm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersElevenAm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersTwelvePm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersTwelvePm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersOnePm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersOnePm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersTwoPm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersTwoPm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersThreePm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersThreePm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersFourPm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersFourPm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersFivePm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersFivePm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersSixPm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersSixPm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersSevenPm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersSevenPm = Math.floor(Math.random() * (150 - 51) + 50);
var minNumOfCustomersEightPm = Math.floor(Math.random() * (50 - 0));
var maxNumOfCustomersEightPm = Math.floor(Math.random() * (150 - 51) + 50);


// 1.  1st and Pike shop object literal
var firstAndPike = {
  customers: [(maxNumOfCustomersSixAm - minNumOfCustomersSixAm) * avgNumCookiesPurchased, (maxNumOfCustomersSevenAm - minNumOfCustomersSevenAm) * avgNumCookiesPurchased, (maxNumOfCustomersEightAm - minNumOfCustomersEightAm) * avgNumCookiesPurchased, (maxNumOfCustomersNineAm - minNumOfCustomersNineAm) * avgNumCookiesPurchased, (maxNumOfCustomersTenAm - minNumOfCustomersTenAm) * avgNumCookiesPurchased, (maxNumOfCustomersElevenAm - minNumOfCustomersElevenAm) * avgNumCookiesPurchased, (maxNumOfCustomersTwelvePm - minNumOfCustomersTwelvePm) * avgNumCookiesPurchased, (maxNumOfCustomersOnePm - minNumOfCustomersOnePm) * avgNumCookiesPurchased, (maxNumOfCustomersTwoPm - minNumOfCustomersTwoPm) * avgNumCookiesPurchased, (maxNumOfCustomersThreePm - minNumOfCustomersThreePm) * avgNumCookiesPurchased, (maxNumOfCustomersFourPm - minNumOfCustomersFourPm) * avgNumCookiesPurchased, (maxNumOfCustomersFivePm - minNumOfCustomersFivePm) * avgNumCookiesPurchased, (maxNumOfCustomersSixPm - minNumOfCustomersSixPm) * avgNumCookiesPurchased, (maxNumOfCustomersSevenPm - minNumOfCustomersSevenPm) * avgNumCookiesPurchased, (maxNumOfCustomersEightPm - minNumOfCustomersEightPm) * avgNumCookiesPurchased],
  
  // randomNumOfCustomers2, randomNumOfCustomers3, randomNumOfCustomers4, randomNumOfCustomers5, randomNumOfCustomers6, randomNumOfCustomers7, randomNumOfCustomers8, randomNumOfCustomers9, randomNumOfCustomers10, randomNumOfCustomers11, randomNumOfCustomers12, randomNumOfCustomers13, randomNumOfCustomers14, randomNumOfCustomers15],
//   shopInfo: ['minCustomers', 'maxCustomers', 'avgNumOfCookiesPurchased']
render: function () {
  var ulEl = document.getElementById('firstAndPikeShop');

  for (var i = 0; i < hoursOfOperation.length; i++) {
    // 1. create a list of items (create the element)
    var liEl = document.createElement('li');
    // 2. give the li element content
    liEl.textContent = hoursOfOperation[i] + ': ' + this.customers[i];
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
console.log('min number of customers' + minNumOfCustomersSixAm);
console.log('max number of customers' +   maxNumOfCustomersSixAm);