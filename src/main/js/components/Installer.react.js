/**
 * This component operates as a "Controller-View". It listens for changes in
 * the InstallerStore and passes the new data to its children.
 */
var React = require('react');
var InstallerStore = require('../stores/InstallerStore');
var InstallerActions = require('../actions/InstallerActions');

/**
 * Retrieve the current Installer data from the InstallerStore
 */
function getInstallerState() {
    return {
        steps: InstallerStore.getAll(),
        currentStep: InstallerStore.getCurrentStep()
    };
}

var Installer = React.createClass({
    getInitialState: function() {
        return getInstallerState();
    },

    componentDidMount: function() {
        InstallerStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        InstallerStore.removeChangeListener(this._onChange);
    },

    /**
     * @return {object}
     */
    render: function() {
        return (
            <div>
                <p>{this.state.currentStep.name}</p>
                <p>{this.state.currentStep.description}</p>
            </div>
        );
    },

    /**
     * Event handler for 'change' events coming from the InstallerStore
     */
    _onChange: function() {
        this.setState(getInstallerState());
    }
});

module.exports = Installer;
