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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
