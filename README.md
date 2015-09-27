# Takeoff-app
Desktop app for takeoff.io

## Installation
Install Github's [Atom shell](http://github.com/atom/atom-shell).
```
npm install atom-shell -g
```

## App Details
In general, we use flux and react for the management of our data. Check https://facebook.github.io/flux and https://facebook.github.io/flux/docs/todo-list.html

### Folder structure
We use the basic atom shell app and there we have the source folder. This folder looks like this:

    css/
    fonts/
    images/
    img/
    js/
    --- constants/      // Constants for the events that we can use
    --- actions/        // Actions, we will use these to perform actions (for example run step, load steps, next step, ...)
    --- components/     // Components, these handle the rendering
    --- dispatcher/     // Dispatcher for the actions to the stores (View can put actions in here)
    --- stores/         // Data layers which updates when we get new actions. These uses eventEmitters to broadcast 'change' events to the controller-views
    --- utils/          // Mock API

### Pages
There are several sub pages that we have for the app

#### Installer
This loads the installer and goes through every step needed to get our app up and running.

#### Main
This page will load the main page with the accounts, the environments, ...

### References
Great references are:

* https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux
* https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoApp.react.js
* https://facebook.github.io/flux/docs/todo-list.html
* http://ilikekillnerds.com/2015/02/developing-react-js-components-using-es6/
* http://www.jayway.com/2015/03/04/using-react-with-ecmascript-6/
* http://reactjs.net/guides/es6.html

## Run
`npm run-script watch` to start the development server
`npm run-script start` to run the app

## Production Build
run `gulp atom` which will build the app and put it as a zip file in ./dist

## Development Build
We create a atom-shell package and we will copy the source over of our app to that one. Check https://github.com/joaomoreno/gulp-atom-shell  for options.

We got 2 ways to run the app, 1 manual and 1 automatic by running the script.

### Mac
1. Script
Run `./run_mac.sh` or `gulp atom-run`

2. Manually
Run `/usr/local/lib/node_modules/atom-shell/dist/Atom.app/Contents/MacOS/Atom `pwd`/src`
