import React from 'react/addons';
import History from 'history';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import AuthActions from '../../../actions/AuthActions';
import AuthStore from '../../../stores/AuthStore';
import BaseComponent from '../../BaseComponent';
import './Login.css';

class LoginPage extends BaseComponent {
    constructor(props) {
        super(props);

        this._bind('_onChange');
    }

    _getAuthState() {
        return {
            isLoggedIn: AuthStore.user != undefined
        }
    }

    componentDidMount() {
        AuthStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        // Change state
        var newState = this._getAuthState();
        this.setState(newState);

        // If logged in, redirect
        if (newState.isLoggedIn) {
            // If we got old state, go to that path
            if (this.props.location.state && this.props.location.pathname != '/login') {
                this.props.history.pushState(null, this.props.location.state.nextPathname);
            } else {
                this.props.history.pushState(null, '/');
            }
        }
    }

    login(e) {
        e.preventDefault();
        AuthActions.login(this.refs.email.state.value, this.refs.password.state.value);
    }

    render() {
        return (
            <div className="LoginPage">
                <form role="form">
                    <Input type="email" ref="email" placeholder="Email" label="Email" id="user_email" />
                    <Input type="password"  ref="password" label="Password" id="user_password" />

                    <Button type="submit" text="Login" onClick={this.login.bind(this)} />
                </form>
            </div>
        );
    }
}

export default LoginPage;
