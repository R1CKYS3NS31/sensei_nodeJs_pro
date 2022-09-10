const environment = require('./environments')
const PropertiesReader = require('properties-reader')
const properties = new PropertiesReader(environment);

const someVal = properties.get('main.app.port')
console.log(someVal);

// Starting the express server
// $ npm start env=development
// or
// $ npm start env=production

// ricky has bugs
