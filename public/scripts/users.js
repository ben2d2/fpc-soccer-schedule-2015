var User = React.createClass({
  render: function() {
    return (
      <div className="user">
        <div className="userName">
          {this.props.first_name}
        </div>
      </div>
    );
  }
});

var UserBox = React.createClass({
  loadUsersFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleUserSubmit: function(user) {
    var users = this.state.data;
    users.push(user);
    this.setState({data: users}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: user,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadUsersFromServer();
    setInterval(this.loadUsersFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="userBox">
        <strong>DIRECT MESSAGES</strong>
        <UsersList data={this.state.data} />
      </div>
    );
  }
});

var UsersList = React.createClass({
  render: function() {
    var userNodes = this.props.data.map(function(user) {
      return (
        <User first_name={user.first_name}>
          {user.first_name}
        </User>
      );
    });
    return (
      <div className="userList">
        {userNodes}
      </div>
    );
  }
});

var UserForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var first_name = React.findDOMNode(this.refs.first_name).value.trim();
    var last_name = React.findDOMNode(this.refs.last_name).value.trim();
    var email = React.findDOMNode(this.refs.email).value.trim();
    if (!last_name || !first_name || !email) {
      return;
    }
    this.props.onUserSubmit({first_name: first_name, last_name: last_name, email: email});
    React.findDOMNode(this.refs.first_name).value = '';
    React.findDOMNode(this.refs.last_name).value = '';
    React.findDOMNode(this.refs.email).value = '';
  },
  render: function() {
    return (
      <form className="userForm" onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input type="text" className="text-field" ref="first_name"/>
        <label>Last Name</label>
        <input type="text" className="text-field" ref="last_name"/>
        <label>Email</label>
        <input type="text" className="text-field" ref="email"/>
        <input type="submit" value="POST" className="btn btn-lg"/>
      </form>
    );
  }
});
