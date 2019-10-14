import express, { response } from 'express';

var app = express();
app.use(
    // parse all requests regardless of content-type
    express.json({ type: "*/*" })
);

// Import routes defined elsewhere
require('./api/controllers/root')(app);
require('./api/controllers/posts')(app);

app.use('/static/images', express.static('static/images'))

const PORT = process.env.PORT || '3000';
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});