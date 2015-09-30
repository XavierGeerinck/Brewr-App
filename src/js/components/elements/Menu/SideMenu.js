import React from 'react';
import BaseComponent from '../../BaseComponent.js';
import MenuItem from './MenuItem.js';
import Menu from './Menu.js';

class SideMenu extends BaseComponent {

    render() {

        return (
            <nav title="Brewr side menu">
                <Menu>
                    <MenuItem link="/dashboard"><i className="fa fa-home"></i>Dashboard</MenuItem>
                    <MenuItem link="/organisation/1/teams"><i className="fa fa-group"></i>Teams</MenuItem>
                    <MenuItem link="/builder"><i className="fa fa-gears"></i>Image Creator</MenuItem>

                    <Menu>
                        <MenuItem link="/organisation/1/admin"><i className="fa fa-lock"></i>Admin</MenuItem>
                        <MenuItem link="/organisation/1/admin"><i className="fa fa-lock"></i>Admin</MenuItem>
                    </Menu>

                    <MenuItem link="/logout" isStickBottom={true}><i className="fa fa-sign-out"></i>Logout</MenuItem>
                </Menu>
            </nav>
        );
    }
}

export default SideMenu;
