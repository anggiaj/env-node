# env

Know your environment better (a Rails.env wannabe for nodejs).

[![npm version](https://badge.fury.io/js/env-node.svg)](https://badge.fury.io/js/env-node)
[![Build Status](https://travis-ci.org/anggiaj/env-node.svg?branch=master)](https://travis-ci.org/anggiaj/env-node) 

## Requirements

- node >= 6.1

## Installation

```
npm install env-node --save
```

## Usage

```JS

const env = require('env-node');

// given process.env.NODE_ENV === 'development'
env == 'development'; // true
env === 'development'; // false, is not a string
env.isDevelopment; // true
env.isTest; // false

// given process.env.NODE_ENV === 'test:e2e'
env.isTestE2e; // true
env.satisfyTest; // true

// given process.env.NODE_ENV === 'integration-test'
env.isIntegrationTest; // true
env.satisfyTest; // true
```

See [test](https://github.com/anggiaj/env-node/blob/master/test/index.spec.js).

## Contributing

Feel free.

## License

[MIT License](http://www.opensource.org/licenses/MIT)
