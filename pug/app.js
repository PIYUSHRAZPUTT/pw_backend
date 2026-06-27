import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app= express();
const PORT= 5000;

const __filename= fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

// set pug as the view engine
app.set('view engine', 'pug');

// set the directory where views are stored
app.set('views', path.join(__dirname, 'views'));

// sample route
app.get('/',(req, res)=>{
    res.render('index', {
        title:'Welcome',
        message:'Hello from pug and express',
    })
});

app.get('/events',(req, res)=>{
    res.render('events', {
        title:'Event Page',
        events: ['Hackathone', 'dance', 'signature'],
    })
});

// listen the server
app.listen(PORT, ()=>{
    console.log('Server is running on PORT No. ', PORT);
})