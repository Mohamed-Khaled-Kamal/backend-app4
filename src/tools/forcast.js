const request = require("request");

const forcast = (laititude, longtitude, callback) => {
  const url ="http://api.weatherapi.com/v1/current.json?key=e8cfb077008e4b74bc7174056241507&q=" +laititude +"," +longtitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect API", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(undefined,response.body.location.name +"it's " + response.body.current.condition.text + " Temp : " + response.body.current.temp_c);
    }
  });
};

module.exports = forcast