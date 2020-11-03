const settingDAL = require("../DAL/serviceSettingsDAL");

const settings = () => {
    let s = await settingDAL.getObj();
    return s;
}

module.exports = settings;