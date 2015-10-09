import AppDispatcher from '../dispatchers/AppDispatcher';
import OrganisationConstants from '../constants/OrganisationConstants';
import OrganisationService from '../services/OrganisationService';

class ProjectActions {

    all() {
        OrganisationService.all(function(organisations){

            if(organisations.error) {
                console.log(organisations.error);
            } else {
                AppDispatcher.handleServerAction({
                    type: OrganisationConstants.RESPONSE_ORGANISATION_MEMBER,
                    organisations: organisations.data
                });
            }
        });
    }

    error(err) {
        console.log(err);
    }


}

export default new ProjectActions();