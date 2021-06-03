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
function addToCollection (title, artist, yearPublished) {
  let albums = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(albums);
}
addToCollection('All That I Am', 'Joe', '1997');
console.log(collection);
//
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same
// and different artists and published years. (Feel free to share your musical interests,
// or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
addToCollection('My Name is Joe', 'Joe', '2000');
console.log(collection);
addToCollection('Better Days', 'Joe', '2001');
console.log(collection);
addToCollection('Colleyhighharmony', 'Boyz II Men', '1991');
console.log(collection);
addToCollection('CrazySexyCool', 'TLC', '1994');
console.log(collection);
addToCollection('112', '112', '1996');
console.log(collection);
addToCollection('One In A Million', 'Aaliyah', '1996');
console.log(collection);

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results
// from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST,
//published in YEAR`.
function showCollection (albumArray) {
  for (let i = 0; i < albumArray.length; i++) {
    console.log(`Title: ${albumArray[i].title}, Artist: ${albumArray[i].artist}, Year: ${albumArray[i].yearPublished}`);
  }
}
//
// - Test the `showCollection` function.
showCollection(collection);//Why does it show up as undefined?

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist (artist){
  let matchingArtist = [];
  console.log('In find by artist');
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].artist === artist) {
        matchingArtist.push(collection[i]);
      }//end of if
    }//end of for loop
    return matchingArtist;
  }
  findByArtist('Joe');
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log(findByArtist('Joe'));
showCollection(findByArtist('Joe'));
// > When testing your functions, write all tests in the JavaScript file!
