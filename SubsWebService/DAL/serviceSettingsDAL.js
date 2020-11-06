// Settings is a read-only file
const jsonfile = require("jsonfile");
const path = "../Resources/Settings.json";

exports.getObj = () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile(__dirname + "/" + path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            };
        });
    });
    // const kaka = await jsonfile.readFile(path, function (err, data) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         return data;
    //     }
    // })
    // return kaka
};