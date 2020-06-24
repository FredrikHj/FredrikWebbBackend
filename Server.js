/* ==================================== Main server file ====================================
     Basic Server module */
const express = require('express');
const https = require('https');
const fs = require('fs');
let cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// Import usefull files
const textFile = require('./TextFile/ReadTextFile');

// The server information
const port = 3001;

/* // HTTPSercure server
const hskey = fs.readFileSync('./ssl/server.key');
const hscert = fs.readFileSync('./ssl/server.cert');
const serverOptions = {
    key: hskey,
    cert: hscert
  };
const httpsServer = https.createServer(serverOptions, app);
httpsServer. */

app.listen(port, () => console.log(`Server is listening on port ${port}!`));

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
