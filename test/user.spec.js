var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:5000";

describe("Teste API user", function() {
  it("Should return Auth successful", function(done) {
    var user_login = urlBase + "/user/login";
    var options = {
      url: user_login,
      form: { email: "appchto@gmail.com", password: "appchto@gmail" }
    };
    request.post(options, function(error, response, body) {
      var _body = {};
      try {
        _body = JSON.parse(body);
      } catch (e) {
        _body = {};
      }

      expect(body).not.to.be.empty;
      expect(_body.message).to.be.eq("Auth successful");
      expect(_body.token).not.to.be.empty;
      done();
    });
  });

  it("Should success if credential is valid", function(done) {
    var user_login = urlBase + "/user/login";
    var options = {
      url: user_login,
      form: { email: "appchto@gmail.com", password: "appchto@gmail" }
    };
    request.post(options, function(error, response, body) {
      var _body = {};
      try {
        _body = JSON.parse(body);
      } catch (e) {
        _body = {};
      }

      expect(response.body).not.to.be.empty;
      expect(response.statusCode).to.be.eq(200);
      done();
    });
  });

  it("endpoint  should return token", function(done) {
    var user_login = urlBase + "/user/login";
    var options = {
      url: user_login,
      form: { email: "appchto@gmail.com", password: "appchto@gmail" }
    };
    request.post(options, function(error, response, body) {
      var _body = {};
      try {
        _body = JSON.parse(body);
      } catch (e) {
        _body = {};
      }
      expect(response.body).not.to.be.empty;
      expect(response.statusCode).to.be.eq(200);
      expect(_body.token).not.to.be.empty
        
    });
  });

});
