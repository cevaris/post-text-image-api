import express from 'express';
import fs from 'fs';
import path from 'path';
const text2png = require('text2png');

module.exports = (app: express.Express) => {
    app.post('/api/posts/new.json', function (req, res) {
        const text = "HelloWorld!\nHelloWorld!\nHelloWorld!\nHelloWorld!HelloWorld!HelloWorld!HelloWorld!HelloWorld!HelloWorld!"
        fs.writeFileSync(
            path.resolve('./static/images/out.png'),
            text2png(text, {
                backgroundColor: 'white',
                lineSpacing: 10,
                padding: 20
            })
        );
        res.json({ 'success': true, url: 'http://localhost:3000/static/images/out.png' })
    });
}