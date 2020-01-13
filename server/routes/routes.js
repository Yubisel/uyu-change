const config = require('../config/config');

module.exports = function(app) {
    app.use(config.apiUrl + '/change', require('./Change'));
}