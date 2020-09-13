# Calendar

## Try it online

open https://gastonjofre.github.io/calendar/ on your browser o click [here](https://gastonjofre.github.io/calendar/)

## How to use

Download the project [or clone the repo](https://gastonjofre.github.io/calendar/):

```sh
git clone https://gastonjofre.github.io/calendar/
cd calendar
```

Install it and run:

```sh
npm install
npm start
```

## Features
- Create new reminder with title, date, time, city and color
- Show reminder info
- Edit an existing reminder
- Delete one reminder
- Delte all the reminders for a day

## Dependecies
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design.
- [lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras.
- [gh-pages](https://pages.github.com/) - Host for pages directly from a GitHub repository.
- [react-color](https://casesandberg.github.io/react-color/) - A Collection of Color Pickers.
- [react-app-polyfill](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md) - Package includes polyfills for various browsers. 
- [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) - Analyze and debug JavaScript bundles code bloat through source maps.

## Notes
- This project was bootstrapped with [Create React App](https://create-react-app.dev/)
- This project was configured to use the Airbnb style guide.
- This project was configured to use absolute imports (jsconfig.json file).
- GitHub Actions - This project is deployed in GitHub pages. The ".github/workflows" folder contains the action to be automatically deployed with GitHub actions when merge code to master branch.
- GitHub Pages - Pay attention to the "homepage" key in the package.json which is used for the GitHub Pages. This key must be the same as the name of the project.
- GitHub Actions - The "predeploy" and "deploy" (package.json) scripts were added to deploy in GitHub Pages with GitHub Actions.
- Analyse - The "analyse" (package.json) script were added to analyze javascript bundled with "source-map-explorer". To run it, first run "build" and then "analyze" scripts.

