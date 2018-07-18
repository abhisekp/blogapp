const { random } = require('lodash/fp');

module.exports = {
  port: random(3031, 3931),
  mongodb: 'mongodb://localhost:27017/blogapp_test',
  // mongodb: `mongodb://localhost:27017/blogapp_test_${random(100, 1000)}`,
};
