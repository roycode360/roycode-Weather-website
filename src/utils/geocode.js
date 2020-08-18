const request = require('request');

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=3d25395edb796f6083ab2da552f573a1&query=${address}`;

    request({url, json: true}, (error, { body } = {}) => {
        if (error) {
            callback(`Unable to conect to location services`, undefined);
        } else if (body.error) {
            callback(`Unable to find location. Try another search.`, undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            });
        };
    });
};

module.exports = geocode