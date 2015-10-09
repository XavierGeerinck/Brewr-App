import AppDispatcher from '../dispatchers/AppDispatcher';
import ProjectConstants from '../constants/ProjectConstants';
import ProjectService from '../services/ProjectService';

class ProjectActions {

    all() {
        ProjectService.all(function(projects){

            if(projects.error) {
                console.log(projects.error);
            } else {
                AppDispatcher.handleServerAction({
                    type: ProjectConstants.RESPONSE_PROJECTS_ALL,
                    projects: projects.data
                });
            }
        });
    }

    error(err) {
        console.log(err);
    }


}

export default new ProjectActions();