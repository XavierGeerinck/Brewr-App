var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ProjectConstants = require('../constants/ProjectConstants');
var assign = require('object-assign');
import BaseStore from './BaseStore';

var CHANGE_EVENT = 'change_projects';
var _projects = {};

class ProjectStore extends BaseStore {

    constructor() {
        super();

        this.subscribe(() => this.registerToActions.bind(this));

        this._projects = [];
    }

    registerToActions(data) {
        switch(data.action.type) {
            case ProjectConstants.RESPONSE_PROJECTS_ALL:
                this._projects = data.action.projects;
                this.emitChange();
                break;
        }
    }

    getAll() {
        return this._projects;
    }

}

export default new ProjectStore();
