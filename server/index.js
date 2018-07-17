import express from 'express';
const PORT = 3000;
const path = require('path');

import serverRenderer from './middleware/renderer';

const app = express();
const router = express.Router();

router.use('^/$', serverRenderer);

router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.use(router);

app.get('/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});