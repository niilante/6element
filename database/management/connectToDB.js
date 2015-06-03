"use strict";

var pg = require('pg');

var conString = "postgres://postgres:password@" + process.env.POSTGRES_PORT_5432_TCP_ADDR + ":" + process.env.POSTGRES_PORT_5432_TCP_PORT + "/postgres";
		
module.exports = function(){
    return new Promise(function(resolve, reject){
		console.log('conString', conString);
		var client = new pg.Client(conString);
        client.connect(function(err) {
            if(err) reject(err); else resolve(client);
        });
        
    });
};
