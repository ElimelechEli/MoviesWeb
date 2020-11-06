const mongoose = require("mongoose");
const SETTINGS = require("../Models/settings");
const MEMEBERS = require("../DAL/MembersApiDAL");
const MOVIES = require("../DAL/MoviesApiDAL");

// Creates DB if doesn't exist
mongoose.connect(`${SETTINGS.MongoDB.connectionURL}/${SETTINGS.MongoDB.database}`);


const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));  
db.once('open', () => {  
  console.log(`Connected to the personsDB database`);
});

// Clearing existing data
db.dropCollection('members')
  .dropCollection('movies')
  .dropCollection('subscriptions');

// Creates DB collections (if doesn't exist)
let membersCol = db.collection('members')
let moviesCol = db.collection('movies');
db.collection('subscriptions');

getAllMembers();
getAllMovies();

// Members collection - pulled from members WS (id, name, email, City)
// Movies collection - pulled from Movies WS (id, name, genres (array of strings), image (url), premiered (date))
// subscriptions - (id, memberid, movies (array of movies))

const getAllMembers = async () => {
  let membersList = await MEMEBERS.getAllUsers();
  
  membersCol.insertMany(membersList, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Members Collection imported");
    }
  });
}

const getAllMovies = async () => {
  let moviesList = await MOVIES.getAllMovies();
  moviesCol.insertMany(moviesList, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Movies Collection imported");
    }
  });
}