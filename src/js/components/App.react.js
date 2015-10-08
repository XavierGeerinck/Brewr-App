import ProjectStore from '../stores/ProjectStore.js';
import MenuStore from '../stores/MenuStore.js';
import Menu from './Menu.react.js';
import Projects from './Projects.react.js';
import BaseComponent from './BaseComponent.js';

function getAppState() {
    return {
        menuItems: MenuStore.getAllMenuItems(),
        sources: MenuStore.getAllSources(),
        projects: ProjectStore.getAll()
    };
}

class App extends BaseComponent {
    getInitialState() {
        return getAppState();
    }

    componentDidMount() {
        MenuStore.addChangeListener(this._onChange);
        ProjectStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        MenuStore.removeChangeListener(this._onChange);
        ProjectStore.removeChangeListener(this._onChange);
    }

    render() {
        console.log(this.state.projects);
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
