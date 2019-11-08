var console = require('console');
var http = require('http');
var dates = require('dates');

module.exports.function = function GetTimeTable (starTerminalID, endTerminalID) {

  function callResultAPI(stID, etID, date){
    var base_url = 'http://openapi.tago.go.kr/openapi/service/ExpBusInfoService/getStrtpntAlocFndExpbusInfo?_type=json';
    var serviceKey = 'NeXsk%2BUacnp0BCEGLobY3JroCGXDafUJ2cK3jTKBAsA4TQkCPV%2Fc1v8wvYk7fCSxk4TP07toamGeEnX6QGE6lQ%3D%3D';

    let options = {
      format: 'json',
      headers: {
        'ServiceKey' : serviceKey
      },
      query: {
        depTerminalId : stID,
        arrTerminalId : etID,
        depPlandTime : date
      }
    };
    var response = http.getUrl(base_url,options);

    var result = new Object();
    result = {
      depPlandTime : response.item.depPlandTime,
      arrPlandTime : response.item.arrPlandTime,
      depPlaceNm : response.item.depPlaceNm,
      arrPlaceNm : response.item.arrPlaceNm,
      gradeNm : response.item.gradeNm,
      charge : response.item.charge
    }
    return result;

  }
  var zoneDateTime = new ZonedDateTime(ZonedDateTime.getTimeZoneId());
  console.log(zoneDateTime);
  var result = new Object();
  result = callResultAPI(starTerminalID, endTerminalID, date);
  console.log(result);
  return result;

}
