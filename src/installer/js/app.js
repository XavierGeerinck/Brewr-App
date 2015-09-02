var Installer = require('./js/components/Installer.react');
var InstallerAPI = require('./js/utils/InstallerAPI');
var React = require('react');

// Start the first installerstep
InstallerAPI.loadSteps();
InstallerAPI.setStep(0);

React.render(<Installer />, document.body);
