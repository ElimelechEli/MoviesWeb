const mongoose = require("mongoose");
const settings = require("../Models/settings");

mongoose.connect(settings.DBConStr);

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));  
db.once('open', () => {  
  console.log(`Connected to the personsDB database`);
});


// TODO - Create collection progrematically (if not exist)
// Members collection - pulled from members WS (id, name, email, City)
// Movies collection - pulled from Movies WS (id, name, genres (array of strings), image (url), premiered (date))
// subscriptions - (id, memberid, movies (array of movies))

