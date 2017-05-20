var React = require('react');
var List = require('./List.jsx');
var capitalize = require("capitalize");

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText:''};
    },
    onChange: function(e) {
        this.setState({newItemText: capitalize.words(e.target.value)});
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText);

        this.setState({items: currentItems, newItemText:''});
    },
    render: function() {

        var divStyle = {
          marginTop: 10
        };

        var listBoxStyle = {
          height: 600
        };

        var autoFocusControl = {};

        if (this.props.autoFocusSet == "true") {
            autoFocusControl = "true";
        }


        var headingStyle = {};
        var borderStyle = {};
        var fontStyle = {};
        var buttonStyle = {};

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
            borderStyle.borderColor = this.props.headingColor;
            fontStyle.color = 'white';
            buttonStyle.background = this.props.headingColor;
            buttonStyle.color = 'white';
        }

        return (
            <div style={divStyle} className="col-xs-12 col-sm-6 col-md-4">
              <div style={borderStyle} className="panel panel-default">
                <div style={headingStyle} className="panel-heading">
                  <h3 style={fontStyle} className="">{this.props.title}</h3>
                </div>
                <div style={borderStyle} className="row panel-body">
                  <form onSubmit={this.handleSubmit}>
                      <div className="col-xs-8 col-sm-9">
                        <input tabIndex={this.props.tabID} className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                      </div>
                      <div className="col-xs-4 col-sm-3">
                        <button style={buttonStyle} className="btn btn-default">Add</button>
                      </div>
                </form>
                </div>
              </div>
              <div style={listBoxStyle}>
                <List items={this.state.items} />
              </div>
            </div>
        );
    }
});

module.exports = ListManager;
