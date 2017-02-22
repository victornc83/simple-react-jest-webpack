# simple-react-jest-webpack
A simple react + jest + webpack setup.

The idea behind this _boilerplate_ is to be easy going writing `React` components with **ES2015** syntax.

Over and over again i see very huge opinionated or very massive boiler plates and thes can be daunting to just clone and get going.

This _boilerplate_ dose not force the users to use a certain architecture but sets the user in a position where he or she can build their own architecture while still have a _boilerpalte_ that lets the write code right away, and add more modules as needed.

# Getting started
1. [Download the zip](https://github.com/Nopzen/simple-react-jest-webpack/archive/master.zip)
2. Unzip the file.
3. `$ npm install && npm start`

# Running Tests
Test are all being run from the `__test__` folder, this is configurable if need be in the `jest` key from `package.json`, how to make your own jest config see [Jest Config Guide](https://facebook.github.io/jest/docs/configuration.html)

**To Run**
1. `$ npm run test` - Runs the tests once.
2. `$ npm run test:dev` - Runs the tests and watching if the are being updated.

### Optional (running another devserver host / port)
After clone its possible to utilize your own `HOST`and `PORT` for the dev server, simply run `mv .example.env .env` after this open the `.env` file and fill out the variables `DEV_SERVER_HOST` and `DEV_SERVER_PORT`

# Disclamer
This boilerplate is still in early development, and can be subject to major changes. When the boilerplate is in a state where i feel like this is a nice starting point it will get tagged with version 1.0.0 and that will be expected stable, before this the documentation might be lagging and might even have a few bugs but should be runnable

### Todo's
- [x] Add .env for setting up `devServer.host` & `devServer.port` with fallbacks to `localhost`& `3000`
- [ ] Make the `webpack.config.js` more modular
- [ ] Make better npm scripts
- [ ] Create a `build` command
