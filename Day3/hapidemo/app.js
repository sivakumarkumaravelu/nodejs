'use strict';

const hapi = require('hapi');
const server = new hapi.Server();

//create routes.js first for REST API
var routes = require('./routes/routes.js'); //require routes

server.connection({ host: 'localhost', port: 3300 });

server.route(routes); //add routes

// to Intercept , use extension point on server
server.ext('onRequest', function (request, reply) {
    console.log("Hi ! I am intercepted ")
    return reply.continue();
});
/*
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.send(__dirname + "index.html");
    }
});
*/
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
})
//node app.js
// open postman and type localhost:3000/store
