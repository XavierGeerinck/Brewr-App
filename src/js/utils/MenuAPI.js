var MenuActions = require('../actions/MenuActions');

module.exports = {
    getMenuData: function() {
        var menuItems = JSON.parse(localStorage.getItem('menu_items'));
        var menuSources = JSON.parse(localStorage.getItem('menu_sources'));

        MenuActions.receiveData({
            menu_items: menuItems,
            menu_sources: menuSources
        });
    }
}
