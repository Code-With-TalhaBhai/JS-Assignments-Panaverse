/*
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/



function make_album(artist_name,album_title,no_tracks){
    const obj = {
        artist_name,
        album_title
    }
    return typeof(no_tracks) == "undefined" ? obj : {...obj,no_tracks};
}


console.log(make_album('Sahir Ali Bhagga','Dil Dil ki awaz'));
console.log(make_album('Nusrat Fateh Ali Khan','Sochta hoon wo kitne masoom the'));
console.log(make_album('Arif Lohaar','Peer meriya jugni gi'));

console.log(make_album('Shafqat Amanat','Pakistan Zindabad',225));
