var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MenuConstants = require('../constants/MenuConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change_menu';
var _menuItems = {}; // collection of menu items
var _sources = {}; // collection of sources
var _activeMenuItemId = null;
var _activeMenuSourceId = null;

function loadMenuData(data) {
    _menuItems = data.menu_items;
    _sources = data.menu_sources;
    _activeMenuItemId = data.isActive;
    _activeMenuSourceId = data.isActive;
}

var MenuStore = assign({}, EventEmitter.prototype, {
    getAllMenuItems: function() {
        return _menuItems;
    },

    getAllSources: function() {
        return _sources;
    },

    getActiveMenuItemId: function() {
        return _activeMenuItemId;
    },

    getActiveMenuSourceId: function() {
        return _activeMenuSourceId;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        switch (payload.actionType) {
            case MenuConstants.RECEIVE_MENU_DATA:
                loadMenuData(payload.data);
                break;
            case MenuConstants.SELECT_MENU_SOURCE:
                _activeMenuSourceId = payload.data;
                break;
            case MenuConstants.SELECT_MENU_ITEM:
                _activeMenuItemId = payload.data;
                break;
        }

        MenuStore.emitChange();

        return true; // No errors, dispatcher needs this.
    })
});

module.exports = MenuStore;
