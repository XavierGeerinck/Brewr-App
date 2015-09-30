import ProjectsStore from '../stores/ProjectsStore.js';
import MenuStore from '../stores/MenuStore.js';
import Menu from './Menu.react.js';
import Projects from './Projects.react.js';
import BaseComponent from './BaseComponent.js';

function getAppState() {
    return {
        menuItems: MenuStore.getAllMenuItems(),
        sources: MenuStore.getAllSources(),
        projects: ProjectsStore.getAll()
    };
}

class App extends BaseComponent {
    getInitialState() {
        return getAppState();
    }

    componentDidMount() {
        MenuStore.addChangeListener(this._onChange);
        ProjectsStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        MenuStore.removeChangeListener(this._onChange);
        ProjectsStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <body>
                <Menu allSources={this.state.sources} allMenuItems={this.state.menuItems} />
                <Projects allProjects={this.state.projects} />
            </body>
        );
    }

    _onChange() {
        this.setState(getAppState());
    }
}

export default App;
