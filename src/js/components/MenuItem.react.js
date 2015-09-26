var React = require('react/addons');
var ReactPropTypes = React.PropTypes;
var cx = React.addons.classSet;

var MenuItem = React.createClass({
    propTypes: {
        item: ReactPropTypes.object.isRequired
    },

    handleClick: function(e) {
        e.preventDefault();
        this.props.onClick(this.props.item.id);
    },

    render: function() {
        var item = this.props.item;

        var listClassName = cx({
            "active": this.props.isActive
        });

        return (
            <li className={listClassName}>
              <a href="#" onClick={this.handleClick}>
                <i className={item.icon_class}></i> {item.name}
              </a>
            </li>
        );
    }
});

module.exports = MenuItem;
