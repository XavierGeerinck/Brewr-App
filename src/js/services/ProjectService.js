import * as ProjectServerActions from '../actions/ProjectActions';
import request from 'superagent';

class ProjectService {
    all(callback) {
        request
            .get('http://localhost:1337/organisations/1/projects')
            .set('Authorization', 'JWT ' + localStorage.getItem('bearer'))
            .end(function (err, res) {
                if (err) {
                    return callback({success: false, error: err});
                }

                return callback({success: true, data: res.body});
            })
    }
}

export default new ProjectService();
