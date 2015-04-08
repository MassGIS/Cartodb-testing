
var CartoDB = require('../');
var secret = require('./secret.js.example');


// please, fill secret.js using secret.js.example before launch the demo
var client = new CartoDB({user:secret.USER, api_key:secret.API_KEY});


var outputRows = function(err, data) {
  console.log(data.rows);
};


client.on('connect', function() {
  client
  //.query("select * from {table} limit 5", {table: 'tracker'}, outputRows)
.query("select * from {table} limit 5", {table: 'wilmington_master_address_table'}, outputRows)
  
  .query("select * from tracker limit 5 offset 5", outputRows);
  console.log(outputRows);
});

client.connect();

