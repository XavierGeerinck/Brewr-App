var AppDispatcher = require('../dispatchers/AppDispatcher');
var ProjectsConstants = require('../constants/ProjectsConstants');

var ProjectsActions = {
    receiveProjects: function(data) {
        AppDispatcher.handleAction({
            actionType: ProjectsConstants.RECEIVE_PROJECTS_DATA,
            data: data
        })
    }
};

module.exports = ProjectsActions;
