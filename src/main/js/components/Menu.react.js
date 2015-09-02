var React = require('react');
var ReactPropTypes = React.PropTypes;
var MenuSource = require('./MenuSource.react');
var MenuItem = require('./MenuItem.react');
var MenuActions = require('../actions/MenuActions');
var MenuStore = require('../stores/MenuStore');

function getMenuState() {
    return {
        activeMenuItemId: MenuStore.getActiveMenuItemId(),
        activeMenuSourceId: MenuStore.getActiveMenuSourceId()
    };
}
var Menu = React.createClass({
    propTypes: {
        allMenuItems: ReactPropTypes.array.isRequired,
        allSources: ReactPropTypes.array.isRequired
    },

    getInitialState: function() {
        return getMenuState();
    },

    componentDidMount: function() {
        MenuStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        MenuStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getMenuState());
    },

    /**
     * @return {object}
     */
    render: function() {
        var allMenuItems = this.props.allMenuItems;
        var allSources = this.props.allSources;

        var menuItems = [];
        var menuSources = [];

        for (var key in allMenuItems) {
            var isActive = (this.state.activeMenuItemId === key);

            allMenuItems[key].id = key; // set unique identifier

            menuItems.push(<MenuItem key={key} item={allMenuItems[key]} isActive={isActive} onClick={MenuActions.selectMenuItem} />);
        }

        for (var key in allSources) {
            var isActive = (this.state.activeMenuSourceId === key);

            allSources[key].id = key; // set unique identifier

            menuSources.push(<MenuSource key={key} source={allSources[key]} isActive={isActive} onClick={MenuActions.selectMenuSource} />);
        }

        return (
            <nav>
                <div id="new-project">
                    <a className="button" href="#">
                      <i className="fa fa-rocket"></i> New Project
                    </a>
                </div>

                <ul>
                    {menuItems}
                </ul>

                <h1>SOURCES</h1>
                <ul>
                    {menuSources}
                </ul>

                <a href="#" className="dropdown-button">
                    Xavier Geerinck

                    <i className="fa fa-chevron-down"></i>
                </a>
            </nav>
        );
    }
});

module.exports = Menu;
