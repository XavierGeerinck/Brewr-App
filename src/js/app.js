/*var Installer = require('./js/components/pages/Installer/Installer.react');
var InstallerAPI = require('./js/utils/InstallerAPI');
var React = require('react');

// Start the first installerstep
InstallerAPI.loadSteps();
InstallerAPI.setStep(0);

React.render(<Installer />, document.body);  */
                  /*
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

 React.render(<App />, document.body);           */

require('../styles/less/main.less');

import React from 'react';
import routes from './routes';

React.render(routes, document.body);
