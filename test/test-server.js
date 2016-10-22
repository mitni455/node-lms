global.DATABASE_URL = 'mongodb://localhost/node-lms';


var chai     = require('chai');
var chaiHttp = require('chai-http');
var server   = require('../server.js');
var Course   = require('../models/course');
var Lesson   = require('../models/lesson');


var should   = chai.should();
var app      = server.app;
var storage  = server.storage;


chai.use(chaiHttp);


describe('index page', function() {
  it('index page loads', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
  });

  it('login page loads', function(done) {
    chai.request(app)
      .get('/login.html')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
  });

  it('lesson page loads', function(done) {
    chai.request(app)
      .get('/lesson.html')
      .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
  });
}); // end describe
