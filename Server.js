/* ==================================== Main server file ====================================
     Basic Server module */
const express = require('express');

let cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// Import usefull files
let ReadTxtFiles= require('./Functions/ReadTxtFiles');

// The server information
const port = 3001;
app.listen(port, () => console.log(`server is listening on port ${port}!`));

/* Run function for the mehods ==============================================================


/* Middleware according the name
    Will using varifying the token string from eatch server request */ 
/* let verifyToken = (req, res, next) =>{
    //const bearerHeader = req.headers['authorization'].split(' ')[1];
    // check there is a token
    //if (bearerHeader === createdToken[0]) {       
        let getInlogedUser = req.params.user;
        SQLFunctions.runSQLConn(SQLFunctions.buildCorrectSQLStatements('userSpec', getInlogedUser));
        SQLFunctions.runSQLConn(SQLFunctions.structuredCols());

        //jwt.verify(bearerHeader, 'inlogSecretKey');
        userFunctions.verifyUser(getInlogedUser)       
        setTimeout(() => {   
            res.status(200).send(SQLFunctions.incommingSQLDataArr);
        }, 500); 
        next();
    //}
    //else res.status(403).send('Authorization failed!');
}  */

// Run method when requested from client ====================================================
// Get siteLoga
/* app.get('/SiteLoga', (req, res) => {
    console.log('========================= Get SiteLogo ==========================================');
    let correctPath = '';
    const directoryPath = path.join(__dirname, './public/Images');

    fileSystem.readdir(directoryPath, (err, file) => {
        let imgPath =  directoryPath.split('public\\')[1];
        res.set({'Content-Type': 'image/jpg'});
        res.status(200).send(`/${imgPath}/${file}`);
    });
    SQLFunctions.resetSQLData();
}); */
// Run default   
app.get('/GetText::pageText', (req, res) => {
    console.log('========================= ReadTxtFile ==========================================');
       console.log(req.params);
       
    
    res.status(200).send(
        {textMain: {
            welcome: '',
            ewdfew: '',
       }, 
       textServices: 'gerag'});
});
