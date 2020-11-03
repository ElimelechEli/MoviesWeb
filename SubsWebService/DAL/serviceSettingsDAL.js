// Settings is a read-only file
const settings = require("jsonfile");
const path = "../Resources/Settings.json";

exports.getObj = () => {
    return new Promise((resolve, reject)=> {
        jsonfile.readFile(path, err, obj => {
            if (err) {
                reject(err);
            } else {
                resolve(obj);
            };
        });
    });
};