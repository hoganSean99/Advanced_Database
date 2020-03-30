var assert = require('assert');
var express = require('express');
var request = require('request');
var status = require('http-status');
var expect = require('chai').expect;

describe('Server initialization', function() {
    var app = express();
    var server;

    before(function (done) {
        server = app.listen(3000, done);
    });

describe('Check Pages exist', function() {
    it('Check that Home page does exist', function (done) {
        request('http://localhost:3000', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
    it('Check that Update Book page does exist', function (done) {
        request('http://localhost:3000/updateBook', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
    it('Check that Add Book page does exist', function (done) {
        request('http://localhost:3000/updateBook', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
       });
    });
});

describe('Check Pages do not exist', function() {
    it('Check that About page does not exist', function (done) {
        request('http://localhost:3000/about', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
    it('Check that Contact Us page does not exist', function (done) {
        request('http://localhost:3000/contact', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
	    done();
        });
    });
});
});
