# simple-react-jest-webpack
A simple react + jest + webpack setup.

# Getting started
1. `$git clone git@github.com:Nopzen/simple-react-jest-webpack.git`
2. `npm install && npm start"

# Running Tests
Test are all being run from the `__test__` folder, this is configurable if need be in the `jest` key from `package.json`, how to make your own jest config see [Jest Config Guide](https://facebook.github.io/jest/docs/configuration.html)

**To Run**
1. `$ npm run test` - Runs the tests once.
2. `$ npm run test:dev` - Runs the tests and watching if the are being updated.

### Optional (running another devserver host / port)
After clone its possible to utilize your own `HOST`and `PORT` for the dev server, simply run `mv .example.env .env` after this open the `.env` file and fill out the variables `DEV_SERVER_HOST` and `DEV_SERVER_PORT`


### Todo's
- [x] Add .env for setting up `devServer.host` & `devServer.port` with fallbacks to `localhost`& `3000`
- [ ] Make the `webpack.config.js` more modular
- [ ] Make better npm scripts
- [ ] Create a `build` command
