var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="General To Do" headingColor="#0A0A0A" tabID="1" autoFocusSet="true" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Wynne" headingColor="#FFB521" tabID="2" />, document.getElementById('wynne'));
ReactDOM.render(<ListManager title="LaderaLife.com" headingColor="#E61F00" tabID="3" />, document.getElementById('ladera'));
