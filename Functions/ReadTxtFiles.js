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
let countRegedUser = 0;
const userId  = () => {  
    //Note - When calling this function I need set the id value = -1 able starting the user id from nr 1 -->
    for (let index = 0; index < regedUserList.regedUser.length; index++) { 
        countRegedUser = regedUserList.regedUser[index].userId;
    }
    // Get the last id in my arr of users and add by one
    countRegedUser++;    
    return countRegedUser;
}
// =======================================================================================================================

// Validate the user who whants logging in
exports.validateUser = (incommingUser) => {
    let getFullName = '';
    let userReturnData = {userMatch: false};
        
    let userList = regedUserList['regedUser'];
    
    // Check the userList for a userName vs password match
    for (let index = 0; index < userList.length; index++) {
        const getUsername = userList[index].userName;
        const getPassword = userList[index].userPassWord;
        // Check if there are any match with a reged user
        if (incommingUser.userName === getUsername && incommingUser.userPassWord === getPassword) {
            userReturnData = {
                userId: userId()-1,
                userMatch: true,
                loginName: userList[index].fullName
            }
        }
    }
    return userReturnData;
} 
exports.verifyUser = (getInlogedUser) => {  
    let getCorrectUserData = [];  
    SQLFunctions.incommingSQLDataArr.map((obj) => {
        for (const key in obj) {
            if (obj[key].userName === getInlogedUser) {
                getCorrectUserData.push(obj[key]);
            }
        }
        return getCorrectUserData;
    });
    return getCorrectUserData;
}
exports.fixSQLDataColsObj = (incommingCols) => {

    return incommingCols;
}