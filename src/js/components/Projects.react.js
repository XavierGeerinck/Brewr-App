var React = require('react');
var ReactPropTypes = React.PropTypes;
var ProjectItem = require('./ProjectItem.react');

var Projects = React.createClass({
    propTypes: {
        allProjects: ReactPropTypes.array.isRequired
    },

    render: function() {
        // If no projects, don't show anything
        if (typeof(this.props.allProjects) != "undefined" && Object.keys(this.props.allProjects).length < 1) {
            return null;
        }

        var allProjects = this.props.allProjects;
        var projects = [];

        for (var key in allProjects) {
            projects.push(<ProjectItem project={allProjects[key]} key={key} />);
        }

        return (
            <main>
                {projects}
            </main>
        );
    }
});

module.exports = Projects;
