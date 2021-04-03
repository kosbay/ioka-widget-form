const path = require('path');

module.exports = env => {
  return ({
    entry: {
      parent: `./src/components/widget.js`,
    },
    output: {
      path: path.resolve(__dirname, `./`),
      filename: 'index.js'
    }
  })
};