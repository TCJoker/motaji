var console = require('console');
var http = require('http');
var fail = require('fail');

module.exports.function = function SearchTerminal(startTerminal) {


    var base_url = 'http://openapi.tago.go.kr/openapi/service/ExpBusInfoService/getExpBusTrminlList?_type=json';
    var ServiceKey = 'NeXsk%2BUacnp0BCEGLobY3JroCGXDafUJ2cK3jTKBAsA4TQkCPV%2Fc1v8wvYk7fCSxk4TP07toamGeEnX6QGE6lQ%3D%3D';

    let options = {
      format: 'json',
      headers: {
        'ServiceKey' : ServiceKey
      },
      query: {
        query : startTerminal
      }
    };
    var response = http.getUrl(base_url,options);
    console.log(response);
  return response;
}
