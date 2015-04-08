
var CartoDB = require('../');
var secret = require('./secret.js.example');

var  file = require('fs').createWriteStream(__dirname + '/output.json');

//var outputRows = function(err, data) {
  //console.log(data);
//};

// please, fill secret.js using secret.js.example before launch the demo
var client = new CartoDB({user:secret.USER, api_key:secret.API_KEY});

client.on('connect', function() {
	console.log("Connected");
    client
      .query("select * from {table} limit 5", {table: 'wilmington_master_address_table'})
      .query("select * from tracker limit 5 offset 5");
});

client.pipe(file);
client.connect();
