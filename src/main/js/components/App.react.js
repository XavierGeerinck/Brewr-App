var React = require('react');
var ProjectsStore = require('../stores/ProjectsStore');
var MenuStore = require('../stores/MenuStore');
var Menu = require('./Menu.react');
var Projects = require('./Projects.react');

function getAppState() {
    return {
        menuItems: MenuStore.getAllMenuItems(),
        sources: MenuStore.getAllSources(),
        projects: ProjectsStore.getAll()
    };
}

var App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },

    componentDidMount: function() {
        MenuStore.addChangeListener(this._onChange);
        ProjectsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        MenuStore.removeChangeListener(this._onChange);
        ProjectsStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <body>
                <Menu allSources={this.state.sources} allMenuItems={this.state.menuItems} />
                <Projects allProjects={this.state.projects} />
            </body>
        );
    },

    _onChange: function() {
        this.setState(getAppState());
    }
});

module.exports = App;
