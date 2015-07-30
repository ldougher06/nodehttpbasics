/*var expect = require('chai').expect;
var path = require('path');
var parse = require(path.join(process.cwd(), '/lib/calURLParse'));

describe('calURLParse', function () {
  it('should handle the base /cal route', function () {
    expect(parse('/cal')).to.equal('./cal');
  });

  it('should handle a full year route', function () {
    expect(parse('/cal/2015')).to.equal('./cal 2015');
    expect(parse('/cal/9999999')).to.equal('./cal 9999999');
  });

  it('should handle a month first route', function () {
    expect(parse('/cal/1/2015')).to.equal('./cal 1 2015');
  });

  it('should handle a month last route', function () {
    expect(parse('/cal/2015/1')).to.equal('./cal 1 2015');
  });

  it('should handle invalue routes', function () {
    expect(parse('/cal/foo')).to.equal('./cal foo');
    expect(parse('/cal/foo/bar')).to.equal('./cal foo bar');
  });
});*/

var expect = require('chai').expect;
var path = require('path');
var log = require(path.join(process.cwd(), '/lib/log'));
var server = require(process.cwd() + '/lib/server');

describe('log', function () {
  it('should create the log', function () {
    var date = (new Date()).toUTCString();
    var req = {
      method: 'GET',
      url: '/starwarsmovies',
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36'
      }
    var res = {statusCode : 200}
    };

    /*var req2 = {
      method: 'POST',
      url: '/my/form',
      headers: {
        'user-agent': 'curl/7.43.0'
      }
    };*/

    var goal1 = '[' + date + '] "\u001b[36mGET\u001b[39m \u001b[36m/starwarsmovies\u001b[39m" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36"';
    //var goal2 = '[' + date + '] "\u001b[36mPOST\u001b[39m \u001b[36m/my/form\u001b[39m" "curl/7.43.0"';
    expect(log(req)).to.equal(goal1);
    //expect(log(req2)).to.equal(goal2);


  });
});
