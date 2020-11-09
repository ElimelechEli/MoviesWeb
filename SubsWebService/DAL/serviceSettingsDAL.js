// Settings is a read-only file
const jsonfile = require("jsonfile");
const path = require("path").resolve(__dirname, "../Resources/Settings.json");

exports.getObj = async () => {
    const res = await jsonfile.readFile(path);
    return res;
}