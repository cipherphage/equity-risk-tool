# Equity Risk Tool

## About

- *Work in progress, not yet functioning
- Utilize Alpha Vantage Stock Market API to fetch stock data.
- Perform quantitative analysis on the data to determine stocks that fit my long term investment profile.
- Current use case for this app is personal use, running in terminal using `npm start` and `npm run start:server`.

## Built Using

- Alpha Vantage Stock Market API: [https://www.alphavantage.co/](https://www.alphavantage.co/).
- Create React App: [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app).
  - Important note about Create React App as of July 2023: [https://github.com/facebook/create-react-app/issues/13080#issuecomment-1618998426] (https://github.com/facebook/create-react-app/issues/13080#issuecomment-1618998426).
- React-Select component library: [https://react-select.com/home](https://react-select.com/home).
- ExpressJS Node server middleware: [https://expressjs.com/](https://expressjs.com/).
  - Note that to compile and run the server I ran into this issue: [https://stackoverflow.com/a/74921691/4018331](https://stackoverflow.com/a/74921691/4018331) and ended up following this recommendation: [https://github.com/wclr/ts-node-dev/issues/314#issuecomment-1243067589] (https://github.com/wclr/ts-node-dev/issues/314#issuecomment-1243067589) and using `ts-node` with `nodemon`.

## Running the app:

In the project directory, you can run (both the front end app and the API server need to be run):

### `npm start`

Runs the front end app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run start:server`

Runs the API server in development mode.\
API runs on port 3001: [http://localhost:3001](http://localhost:3001).

The API server will reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.