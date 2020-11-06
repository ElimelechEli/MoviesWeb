const settingDAL = require("../DAL/serviceSettingsDAL");

exports.getSettings = async () => {
    let s = await settingDAL.getObj();
    return s;
}