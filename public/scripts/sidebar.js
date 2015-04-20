var Logo = React.createClass({
  render: function() {
    return (
      <div>
        <img src={'http://localhost:3000/images/logo.gif'} />
      </div>
    );
  }
});

var Sidebar = React.createClass({
  render: function() {
    return (
      <div>
        <div className="logoHeader">
          <Logo/>
          <span className="mic">mic</span>Drop
        </div>
        <div id="channels">
          <ChannelBox url="channels.json"  pollInterval={10000} />
        </div>
        <div id="users">
          <UserBox url="users.json"  pollInterval={2000} />
        </div>
      </div>
    );
  }
});


React.render(
  <Sidebar/>,
  document.getElementById('sidebar')
);
