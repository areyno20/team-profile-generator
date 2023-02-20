const fs = require('fs');

const generateHTML = (html) => {
    fs.writeFile('./dist/index.html', html, (err) => {
        if (err) throw err;
        console.log('Your webpage has been generated!');
    })
}

module.exports = generateHTML;

