import React from 'react';
import ProjectsStore from '../../../stores/ProjectsStore.js';
import SideMenu from '../../elements/Menu/SideMenu.js';
import Projects from '../../Projects.react';
import BaseComponent from '../../BaseComponent.js';

class Dashboard extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            projects: ProjectsStore.getAll()
        };

        // Don't forget to BIND!
        this._bind('loadProjects');
    }

    componentDidMount() {
        ProjectsStore.addChangeListener(this.loadProjects);
    }

    componentWillUnmount() {
        ProjectsStore.removeChangeListener(this.loadProjects);
    }

    loadProjects() {
        this.setState({projects: ProjectsStore.getAll()});
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