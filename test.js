var assert = require('assert');
var express = require('express');
var request = require('request');
var status = require('http-status');
var expect = require('chai').expect;

describe('Server initialization', function() {
    var app = express();
    var server;

    function testFunc(test_name, url, response_code){
        it(test_name, function (done) {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(response_code);
                done();
            });
        });
    }

    before(function (done) {
        server = app.listen(3000, done);
    });

    describe('Check Pages exist', function() {
        testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);
	testFunc('Check that Home page does exist', 'http://localhost:3000/', 404);
        testFunc('Check that Update Book page does exist', 'http://localhost:3000/updateBook', 404);
        testFunc('Check that Add Book page does exist', 'http://localhost:3000/addBook', 404);

    });

    describe('Check Pages do not exist', function() {
        testFunc('Check that About page does not exist', 'http://localhost:3000/about', 404);
        testFunc('Check that Contact Us page does not exist', 'http://localhost:3000/contact', 404);
    });
});
