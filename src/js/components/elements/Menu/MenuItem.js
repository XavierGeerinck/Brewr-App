import React, { PropTypes } from 'react';
import BaseComponent from '../../BaseComponent.js';
import { Link } from 'react-router';

class MenuItem extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { link } = this.props;

        var cx = React.addons.classSet;

        var className = cx({
            'SideMenuItem-Active': window.location && window.location.hash.indexOf(link) !== -1
        });

        return (
            <li className={className}>
                {
                    link ? <Link to={link}>{this.props.children}</Link> : this.props.children
                    //link ? <a href={link}>{this.props.children}</a> : this.props.children
                }
            </li>
        );
    }
}

MenuItem.propTypes = {
    link: PropTypes.string,
    isStickBottom: PropTypes.bool
};

MenuItem.defaultProps = {
    link: null,
    isStickBottom: false
};

export default MenuItem;