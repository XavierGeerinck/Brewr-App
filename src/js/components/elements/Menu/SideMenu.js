import React from 'react';
import BaseComponent from '../../BaseComponent.js';
import MenuItem from './MenuItem.js';
import Menu from './Menu.js';
import OrganisationStore from '../../../stores/OrganisationStore';
import OrganisationActions from '../../../actions/OrganisationActions';

export default class SideMenu extends BaseComponent {

    constructor() {
        super();
        this.state = {
            organisations: OrganisationStore.getAll()
        }
    }

    componentDidMount() {
        OrganisationStore.addChangeListener("organisations", this.loadData);
        // load projects
        OrganisationActions.all();
    }

    componentWillUnmount() {
        OrganisationStore.removeChangeListener("organisations");
    }

    loadData() {
        this.setState({organisations: OrganisationStore.getAll()});
    }

    render() {

        const organisations = this.state.organisations;

        //TODO: Show items
        var items = [];
        items.push(<MenuItem link="#">Test</MenuItem>);

        return (

            <nav title="Brewr side menu">

                <Menu>
                    <MenuItem link="/dashboard"><i className="fa fa-home"></i>Dashboard</MenuItem>
                    <MenuItem link="/organisation/1/teams"><i className="fa fa-group"></i>Teams</MenuItem>
                    <MenuItem link="/builder"><i className="fa fa-gears"></i>Image Creator</MenuItem>

                    <Menu>
                        <MenuItem link="#"><i className="fa fa-lock"></i>Admin</MenuItem>
                        <MenuItem link="#"><i className="fa fa-lock"></i>Admin</MenuItem>
                    </Menu>

                    <MenuItem link="/logout" isStickBottom={true}><i className="fa fa-sign-out"></i>Logout</MenuItem>
                </Menu>
            </nav>
        );
    }
}
