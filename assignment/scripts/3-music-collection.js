console.log('***** Music Collection *****');
// ## Part 3 - Building a Music Collection
//
// Update the `3-music-collection.js` file to do the following:
//
// > While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.
//
// ### Required Features
//
// - Create a variable `collection` that starts as an empty array.
//
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
let collection = [];

//Attempt 1
// function addToCollection (title, artist, yearPublished){
//   const album = {
//     title: 'All That I Am',
//     artist: 'Joe',
//     yearPublished: 1997
//   };
// }
// collection.unshift(addToCollection);
// console.log(addToCollection(collection));
// console.log(addToCollection);
// console.log(collection);
//Goal is to push function into collection array.


//Attempt 2
// function addToCollection (title, artist, yearPublished) {
//   collection.push(title, artist, yearPublished);
//   return true;
// }
// addToCollection('stand by me', 'joe', '1999');
// console.log(collection);

//Attempt 3
function addToCollection (title, artist, yearPublished, tracks) {
    let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };//end albums variable
  collection.push(album);
}
addToCollection('All That I Am', 'Joe', '1997', [{name: 'track1',duration: '5:00'},{name: 'track2',duration: '6:00'},{name: 'track3',duration: '7:00'},]);
console.log(collection);
//

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same
// and different artists and published years. (Feel free to share your musical interests,
// or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
// addToCollection('My Name is Joe', 'Joe', '2000');
// console.log(collection);
// addToCollection('Better Days', 'Joe', '2001');
// console.log(collection);
// addToCollection('Colleyhighharmony', 'Boyz II Men', '1991');
// console.log(collection);
// addToCollection('CrazySexyCool', 'TLC', '1994');
// console.log(collection);
// addToCollection('112', '112', '1996');
// console.log(collection);
// addToCollection('One In A Million', 'Aaliyah', '1996');
// console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results
// from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST,
//published in YEAR`.
// function showCollection (albumArray) {
//   for (let i = 0; i < albumArray.length; i++) {
//     console.log(`Title: ${albumArray[i].title}, Artist: ${albumArray[i].artist}, Year: ${albumArray[i].yearPublished}, tracks: ${albumArray[i].tracks}`);
//   }
// }
function showCollection (albumArray) {
  for (let i = 0; i < albumArray.length; i++) {
    console.log(`${albumArray[i].title} by ${albumArray[i].artist}, published in ${albumArray[i].yearPublished}`);
    for (let j = 0; j < albumArray[i].tracks.length; j++) {
      console.log(albumArray[i].tracks[j]);
    }
  }
}
//
// - Test the `showCollection` function.
showCollection(collection);

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist (artist){
  let matchingArtist = [];
  console.log('What artist and I currently searching?', artist);
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].artist === artist) {
        matchingArtist.push(collection[i]);
        console.log('Found this artist: ',matchingArtist);
      }//end of if
    }//end of for loop
    return matchingArtist;
  }
  findByArtist('Joe');
  findByArtist('Max');
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console.log(findByArtist('Max'));
console.log(findByArtist('Joe'));

// > When testing your functions, write all tests in the JavaScript file!

//Stretch Goals

function search (searchObj) {
  let matchingArtist = [];
  // console.log('What is my current search?', searchObj);
    for (let i = 0; i < collection.length; i++) {
      let matching = true;
      // console.log(collection[i]);
      for (let j in searchObj) {//Go through all search criteria.
        if (collection[i][j] != searchObj[j]) {// != means not equal
          // console.log('What collection is doing', collection[i][j]);
          // console.log('What is searchOjb doing', searchObj[j]);
          matching = false;
        }
        // console.log(j + ' : ' + searchObj[j]);
      }
      if (matching == true) {
        matchingArtist.push(collection[i]);
      }
      // if (collection[i].artist === searchObj.artist) {
      //   matchingArtist.push(collection[i]);
      //   console.log('Found this artist: ',matchingArtist);
      // }//end of if
    }//end of for loop
    console.log(matchingArtist);
    return matchingArtist;
}
// search({artist: 'Ray Charles', yearPublished: '1957'});
search({artist: 'Joe', yearPublished: '1997'});
search(); //Tested and it shows up all 7 albums
//Can I or do I need to pull info from ojbects from function on line 43? Maybe not since I can pull from collection.


// // Stretch Goals Attempt 2
// Trying to break it down line by line.
// // create a function called search
// function search(){
//
// }
//
// // Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// function search(searchObj){
//
// }
//
// // Requirement 1: Return a new array of all items in the `collection` matching *all* of the search criteria.
//
// // If no results are found, return an empty array.
// function search(searchObj){
//   var result = [];
//
//   //some code
//
//   return result;
// }
//
// // If there is no search object or an empty search object provided as input, then return all albums in the `collection`
// function search(searchObj){
//   var result = [];
//
//   if(searchObj == '') {
//     //return all albums in the Collection
//     return collection;
//
//   } else {
//   //some code
//   }
//   return result;
// }
//
//
// // Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//
// var trackName = {
//   NAME:DURATION
// };
//
// function search(searchObj, trackName){
//
//   var result = [];
//
//   if(searchObj == '' && trackName == '') {
//     //return all albums in the Collection
//     return collection;
//
//   } else {
//   //some code to search through collections and add to result
//     for (var i = 0; i < collection.length(); i++) {
//       if(searchObj == collection[i] || searchObj.tracks == collection[i].tracks){
//         result.push(collection[i]);
//       }
//     }
//   }
//   return result;
// }
