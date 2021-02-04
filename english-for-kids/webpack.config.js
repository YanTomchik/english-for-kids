const { resolve } = require('path')
const path = require('path');

module.exports = {
  entry: '../english for kids main/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};