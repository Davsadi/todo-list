var React = require('react');
var stripchar = require('stripchar').StripChar;

var ListItem = React.createClass({
  render: function() {

    var textDivStyle = {
      marginTop: 15
    };

    var btnDivStyle = {
      marginTop: 10,
      marginLeft: 15
    };

    var modalStyle = {

    };


      return (
            <div>
              <div style={textDivStyle} className="col-sm-8">
                <li> {this.props.text} </li>
              </div>
              <div style={btnDivStyle} className="col-sm-1">
                <button className="btn btn-success btn-sm"><span className="glyphicon glyphicon-ok"></span></button>
              </div>
              <div style={btnDivStyle} className="col-sm-1">
                <button className="btn btn-danger btn-sm glyphicon glyphicon-remove" data-toggle="modal" data-target={"#"+stripchar.RSExceptUnsAlpNum(this.props.indexID)}></button>
                <div className="modal fade" tabIndex="-1" id={stripchar.RSExceptUnsAlpNum(this.props.indexID)} role="dialog" aria-labelledby="mySmallModalLabel">
                  <div className="modal-dialog modal-sm" role="document">
                    <div style={modalStyle} className="modal-content">
                      <div className="modal-body">
                        Are you sure you want to delete: "{this.props.text}"?
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      );
  }
});

module.exports = ListItem;
