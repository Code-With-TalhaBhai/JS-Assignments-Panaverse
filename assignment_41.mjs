/*
    Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/


export const magicians = ['Jack','Paul Daniels','Lionel Shrike','Harry Houdini','Jeff McBride','David Blaine'];



// export const show_magicians = ()=>{
export const show_magicians = (magicians)=>{
magicians.forEach(element=>{
    // console.log(`World's top magicians are: ${element}`);
    console.log(element);
})
};


show_magicians(magicians);


// export default show_magicians;
