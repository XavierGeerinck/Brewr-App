var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var OrganisationConstants = require('../constants/OrganisationConstants');
var assign = require('object-assign');
import BaseStore from './BaseStore';

var CHANGE_EVENT = 'change_organisations';
var _projects = {};

class OrganisationStore extends BaseStore {

    constructor() {
        super();

        this.subscribe(() => this.registerToActions.bind(this));

        this._organisations = [];
    }

    registerToActions(data) {
        switch(data.action.type) {
            case OrganisationConstants.RESPONSE_ORGANISATION_MEMBER:
                this._organisations = data.action.organisations;
                this.emitChange();
                break;
        }
    }

    getAll() {
        return this._organisations;
    }

}

export default new OrganisationStore();
