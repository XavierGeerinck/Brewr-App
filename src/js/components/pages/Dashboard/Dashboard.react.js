import React from 'react';
import ProjectStore from '../../../stores/ProjectStore.js';
import SideMenu from '../../elements/Menu/SideMenu.js';
import Projects from '../../Projects.react';
import BaseComponent from '../../BaseComponent.js';
import ProjectActions from '../../../actions/ProjectActions';

class Dashboard extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            projects: ProjectStore.getAll()
        };

        ProjectActions.all();

        // Don't forget to BIND!
        this._bind('loadProjects');
    }

    componentDidMount() {
        ProjectStore.addChangeListener(this.loadProjects);
    }

    componentWillUnmount() {
        ProjectStore.removeChangeListener(this.loadProjects);
    }

    loadProjects() {
        this.setState({projects: ProjectStore.getAll()});
    }

    render() {
        return(

            //DASHBOARD
            <div>
                <SideMenu/>
                <Projects allProjects={this.state.projects} />
            </div>
            //<Projects allProjects={this.state.projects} />

        );
    }
}

export default Dashboard;