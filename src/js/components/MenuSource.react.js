var React = require('react/addons');
var ReactPropTypes = React.PropTypes;
var cx = React.addons.classSet;

var MenuSource = React.createClass({
    propTypes: {
        source: ReactPropTypes.object.isRequired
    },

    getInitialState: function() {
        return this.props.source;
    },

    render: function() {
        var source = this.props.source;

        var listClassName = cx({
            "active": this.props.isActive
        });

        return (
            <li className={listClassName}>
              <a href="#" onClick={this.handleClick}>
                <i className={source.icon_class}></i> {source.name}
              </a>
            </li>
        );
    },

    handleClick: function(e) {
        this.props.onClick(this.props.source.id);
    }
});

module.exports = MenuSource;
