/* ==================================== Userfunctions handling ====================================
    Module import for the filesystem working */
const fileSystem = require('fs');
const path = require('path');

/* =======================================================================================================================
    FileReader function */
 exports.readTextFile = (readFile) =>{

     /*  The incomming user and its various keys is saved in a new object which is saving as json in the file RegedUser.json.
     The key one in the object is holding the user´s ID nr, which is calculated according the included array length */
   
    fs.readFile(`./Functions/${ readFile }`, function(err, data) {
        if(err) return console.log(err);
        console.log("The file was saved!");
        return data;
    });
}