const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const history = require('connect-history-api-fallback');

//Initializations
const app = express();
const config = require('./config/config');

//Settings
app.set('port', process.env.PORT || config.port);

//Middlewares
app.use(history());
app.use(logger(config.logger));
app.use(express.json());
app.use(cors());

//Routes
const routes = require('./routes/routes');
routes(app);

//Statics
if (process.env.ENV === 'Production') {
    app.use(express.static(path.join(__dirname, '../dist')));
} else {
    app.use(express.static(path.join(__dirname, 'public')));
}
app.use(express.static(path.join(__dirname, '../data')));


app.listen(app.get('port'), () => console.log('Server listening on port', app.get('port')));