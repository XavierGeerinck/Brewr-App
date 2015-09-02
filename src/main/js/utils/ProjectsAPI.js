var ProjectsActions = require('../actions/ProjectsActions');

module.exports = {
    getProjects: function() {
        var data = JSON.parse(localStorage.getItem('projects'));
        ProjectsActions.receiveProjects(data);
    }
}
