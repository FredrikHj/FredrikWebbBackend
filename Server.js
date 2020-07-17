/* ==================================== Main server file ====================================
Basic Server module */
const express = require('express');
const fileSystem = require('fs');

let cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// The server information
const port = 3001;
app.listen(port, () => console.log(`server is listening on port ${port}!`));

// Run default   
app.get('/GetText', (req, res) => {
    console.log('========================= ReadTxtFile ==========================================');
    // Collecting all textFiles into a object
    const sendTextOStr = {
        textMain: fileSystem.readFileSync('./TextFile/Welcome.txt', 'utf8'),
        services: fileSystem.readFileSync('./TextFile/Services.txt', 'utf8'),
        aboutMe: fileSystem.readFileSync('./TextFile/AbouteMe.txt', 'utf8'),
    }
    console.log("sendTextOStr", sendTextOStr.textMain)
/*     const getSendingType = req.params.pageText;
    console.log("getSendingType", getSendingType)
 */    res.status(200).send(sendTextOStr//[getSendingType]
    );
})
