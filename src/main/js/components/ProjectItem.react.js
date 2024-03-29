var React = require('react');
var ReactPropTypes = React.PropTypes;

var ProjectItem = React.createClass({
    propTypes: {
        project: ReactPropTypes.object.isRequired
    },

    render: function() {
        var project = this.props.project;

        return (
            <div className="project">
                <div className="icon">
                    <img src={project.avatar}></img>
                </div>

                <div className="info">
                    <h1>{project.name}</h1>
                    <p>By {project.creator} <span className="text-success"><i className="fa fa-play-circle"></i> {project.state}</span></p>
                </div>

                <div className="actions">
                    <a href="#" className="action-button">
                        <i className="fa fa-cog"></i>
                    </a>

                    <a href="#" className="action-button">
                        <i className="fa fa-folder"></i>
                    </a>

                    <a href="#" className="action-button accent filled">
                        <i className="fa fa-stop"></i>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = ProjectItem;
