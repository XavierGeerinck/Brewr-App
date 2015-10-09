import * as ProjectServerActions from '../actions/ProjectActions';
import request from 'superagent';

class ProjectService {
    all(callback) {
        request
            .get('http://localhost:8000/user')
            .set('Authorization', 'Bearer ' + localStorage.getItem('bearer'))
            .end(function (err, res) {
                if (err) {
                    return callback({success: false, error: err});
                }

                return callback({success: true, data: res.body.organisations[0].projects});
            })
    }
}

export default new ProjectService();
