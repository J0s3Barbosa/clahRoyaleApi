var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:5000";

describe("Teste API clashroyale", function() {
  it("Should retuen Auth successful", function(done) {
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

  it("endpoint clashs should login and retrieve data", function(done) {
    var url = urlBase + "/api/v1/clashroyale/clashsAllapi";
    var token = "";
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
      if (expect(_body.token).not.to.be.empty) {
        token = _body.token;
        var optionstoken = {
          url: url,
          headers : { Authorization: "bearer " + _body.token }
        };
        request.get(optionstoken, function(error, res, body) {
          var _body = {};
          try {
            _body = JSON.parse(body);
          } catch (e) {
            _body = {};
          }

          expect(res.statusCode).to.be.eq(200);

          done();
        });
      }
    });
  });

  //   it("clashroyaleapi Should receive data",function(done){
  //     request.get(
  //       {
  //         url : urlBase + "/api/v1/clashroyale/clashs"
  //       },
  //       function(error, response, body){

  //         var _body = {};
  //         try{
  //           _body = JSON.parse(body);
  //         }
  //         catch(e){
  //           _body = {};
  //         }
  //         expect(response.statusMessage).to.be.equal('OK');
  //         done();
  //       }
  //     );
  //   });

  //   it("endpoint clashs should return headers content",function(done){
  //     var url = urlBase + "/api/v1/clashroyale/clashs"

  //     request.get(
  //       {
  //         url : url,

  //       },
  //       function(error, response, body){

  //         var _body = {};
  //         try{
  //           _body = JSON.parse(body);
  //         }
  //         catch(e){
  //           _body = {};
  //         }

  //              expect(response.headers["content-length"]).to.have.lengthOf.at.least(1);
  // console.log(response.headers["content-length"])

  //         done();
  //       }
  //     );
  //   });

  //   it("endpoint clashs error should  be null",function(done){
  //     var url = urlBase + "/api/v1/clashroyale/clashs"

  //     request.get(
  //       {
  //         url : url,

  //       },
  //       function(error, response, body){

  //         var _body = {};
  //         try{
  //           _body = JSON.parse(body);
  //         }
  //         catch(e){
  //           _body = {};
  //         }
  //              expect(error).to.be.null;
  //         done();
  //       }
  //     );
  //   });

  //   it("endpoint clashs should not be null",function(done){
  //     var url = urlBase + "/api/v1/clashroyale/clashs"

  //     request.get(
  //       {
  //         url : url,

  //       },
  //       function(error, response, body){

  //         var _body = {};
  //         try{
  //           _body = JSON.parse(body);
  //         }
  //         catch(e){
  //           _body = {};
  //         }

  //              expect(_body).not.to.be.null;

  //         done();
  //       }
  //     );
  //   });

  //   it("endpoint api/v1/clashroyale/clashs should return Auth failed",function(done){
  //     var url = urlBase + "/api/v1/clashroyale/clashs"

  //     request.get(
  //       {
  //         url : url,

  //       },
  //       function(error, response, body){

  //         expect(error).to.be.null;
  //         expect(response.statusCode).to.be.eq(401);

  //         done();
  //       }
  //     );
  //   });

  //   it("endpoint api/v1/clashroyale/clashs should return Auth failed",function(done){
  //     var url = urlBase + "/api/v1/clashroyale/clashs"

  //     request.get(
  //       {
  //         url : url,

  //       },
  //       function(error, response, body){

  //         expect(error).to.be.null;
  //         expect(response.statusMessage).to.be.eq('Unauthorized');

  //         done();
  //       }
  //     );
  //   });
});
