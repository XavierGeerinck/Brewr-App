var React = require('react');
var App = require('./js/components/App.react');
var MenuAPI = require('./js/utils/MenuAPI');
var ProjectsAPI = require('./js/utils/ProjectsAPI');
var ProjectData = require('./js/utils/ProjectData');
var MenuData = require('./js/utils/MenuData');

// Load the project data into the store
localStorage.clear();
MenuData.init();
ProjectData.init();

// Mock Project Call
MenuAPI.getMenuData();
ProjectsAPI.getProjects();

React.render(<App />, document.body);
