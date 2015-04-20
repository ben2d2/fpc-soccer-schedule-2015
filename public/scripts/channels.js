var Channel = React.createClass({
  render: function() {
    return (
      <div className="channel">
        <div className="channelName">
          #{this.props.name}
        </div>
      </div>
    );
  }
});

var ChannelBox = React.createClass({
  loadChannelsFromServer: function() {
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
  handleChannelSubmit: function(channel) {
    var channels = this.state.data;
    channels.push(channel);
    this.setState({data: channels}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: channel,
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
    this.loadChannelsFromServer();
    setInterval(this.loadChannelsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="channelBox">
        <strong>CHANNELS</strong>
        <ChannelsList data={this.state.data} />
      </div>
    );
  }
});

var ChannelsList = React.createClass({
  render: function() {
    var channelNodes = this.props.data.map(function(channel) {
      return (
        <Channel name={channel.name}>
          {channel.name}
        </Channel>
      );
    });
    return (
      <div className="channelList">
        {channelNodes}
      </div>
    );
  }
});

var ChannelForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.name).value.trim();
    if (!name) {
      return;
    }
    this.props.onChannelSubmit({name: name});
    React.findDOMNode(this.refs.name).value = '';
  },
  render: function() {
    return (
      <form className="channelForm" onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" className="text-field" ref="name"/>
        <input type="submit" value="POST" className="btn btn-lg"/>
      </form>
    );
  }
});
