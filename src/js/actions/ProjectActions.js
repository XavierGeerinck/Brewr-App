import AppDispatcher from '../dispatchers/AppDispatcher';
import ProjectConstants from '../constants/ProjectConstants';
import ProjectService from '../services/ProjectService';

class ProjectActions {

    all() {
        ProjectService.all(function(data){

            if(data.error) {
                console.log(data.error);
            } else {
                AppDispatcher.handleServerAction({
                    type: ProjectConstants.RECEIVE_PROJECTS_DATA,
                    data: data
                });
            }
        });
    }

    error(err) {
        console.log(err);
    }

    /*allResponse(projects) {
        console.log(projects);
        AppDispatcher.handleServerAction({
            type: ProjectConstants.RESPONSE_PROJECTS_ALL,
            data: projects
        })
    }*/

}

export default new ProjectActions();