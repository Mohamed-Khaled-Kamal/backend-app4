const request = require("request");



const geocode = (address, callback) => {

    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoibW9oYW1lZGtoYWxlZDc0IiwiYSI6ImNseXFybHJuaTBub2UycnNnZG95b2JpdTMifQ.VTTr4UI-kcJwmDfClL5slQ";

    request({ url: geocodeUrl, json: true }, (error, response) => {
        if (error) {
            callback ("unable to connect geocode service", undefined);
        } else if (response.body.message) {
            callback (response.body.message, undefined);
        } else if (response.body.features.length == 0) {
            callback ("Unable To Find Location" ,undefined);
        } else {

            callback(undefined, {
                
                longtitude : response.body.features[0].center[0],
                laititude : response.body.features[0].center[1]

            })

            
            
        }
    });
}

module.exports = geocode