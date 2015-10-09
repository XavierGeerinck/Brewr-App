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
    }

    componentDidMount() {
        ProjectStore.addChangeListener("projects", this.loadData);
        // load projects
        ProjectActions.all();
    }

    componentWillUnmount() {
        ProjectStore.removeChangeListener("projects");
    }

    loadData() {
        this.setState({projects: ProjectStore.getAll()});
    }

    render() {
        return(

            //DASHBOARD
            <div>
                <SideMenu/>
                <Projects allProjects={this.state.projects} />
            </div>

        );
    }
}

export default Dashboard;