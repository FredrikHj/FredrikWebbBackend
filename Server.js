/* ==================================== Main server file ====================================
     Basic Server module */
const express = require('express');

let cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// Import usefull files
const textFile = require('./TextFile/ReadTextFile');

// The server information
const port = 3001;
app.listen(port, () => console.log(`server is listening on port ${port}!`));

// Run default   
app.get('/GetText', (req, res) => {
    console.log('========================= ReadTxtFile ==========================================');
    // Collecting all textFiles into a object
    const sendTextOStr = {
        textMain: textFile.welcome(),
        services: textFile.services(),
        aboutMe: '',//textFile.abouteMe(),
    }
/*     const getSendingType = req.params.pageText;
    console.log("getSendingType", getSendingType)
 */    res.status(200).send(sendTextOStr//[getSendingType]
    );
})
