var AppDispatcher = require('../dispatcher/AppDispatcher');
var MenuConstants = require('../constants/MenuConstants');

var MenuActions = {
    receiveData: function(data) {
        AppDispatcher.handleAction({
            actionType: MenuConstants.RECEIVE_MENU_DATA,
            data: data
        })
    },

    selectMenuSource: function(menuSourceId) {
        AppDispatcher.handleAction({
            actionType: MenuConstants.SELECT_MENU_SOURCE,
            data: menuSourceId
        })
    },

    selectMenuItem: function(menuItemId) {
        AppDispatcher.handleAction({
            actionType: MenuConstants.SELECT_MENU_ITEM,
            data: menuItemId
        });
    }
};

module.exports = MenuActions;
