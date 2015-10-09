import * as OrganisationServerActions from '../actions/OrganisationActions';
import request from 'superagent';

class OrganisationService {
    all(callback) {
        request
            .get('http://localhost:8000/user')
            .set('Authorization', 'Bearer ' + localStorage.getItem('bearer'))
            .end(function (err, res) {
                if (err) {
                    return callback({success: false, error: err});
                }

                return callback({success: true, data: res.body.organisations});
            })
    }
}

export default new OrganisationService();
