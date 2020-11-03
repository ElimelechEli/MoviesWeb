const {get} = require('axios');
const SETTINGS = require('../Resources/Settings.json');

exports.getAllUsers = () => {
    return get(SETTINGS.APISources.Members);
}
