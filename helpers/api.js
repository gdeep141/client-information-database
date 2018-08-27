const request = require('request');

exports.consume = (url, callback) => {
    request(url, {json: true}, (err, data, res) => {
        if (err) return console.log(err);
        return callback(data);
    });
};