'use strict';

const { resolve } = require('path');
let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  watch: true,

  devtool: "source-map",

  module: {}
};
