/* ==================================== Main server file ====================================
     Basic Server module */
const express = require('express');

let cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// Import usefull files
const welcomeText = require('./TextFile/WelcomeText');

// The server information
const port = 3001;
app.listen(port, () => console.log(`server is listening on port ${port}!`));

// Collecting all textFiles into a object
const sendTextOStr = {
    textMain: welcomeText.WelcomeText(),
}
// Run default   
app.get('/GetText::pageText', (req, res) => {
    console.log('========================= ReadTxtFile ==========================================');
    const getSendingType = req.params.pageText;
    res.status(200).send(sendTextOStr[getSendingType]);
})
