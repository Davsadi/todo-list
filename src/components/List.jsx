var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function() {

        var createItem = function(text, index) {
            return <ListItem key={index + text} text={text} indexID = {index + text.replace(/\s+/g, "-")} />;
        };

        var divStyle = {
          paddingTop: 10
        };

        return (<div className="row">{this.props.items.map(createItem)}</div>);
    }
});

module.exports = List;
