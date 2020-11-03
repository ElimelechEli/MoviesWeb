const {get} = require('axios');
const SETTINGS = require('../Resources/Settings.json');

exports.getAllMovies = () => {
    return get(SETTINGS.APISources.Movies);
}