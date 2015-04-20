//Components from GameBox

var GameForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var level = React.findDOMNode(this.refs.level).value.trim();
    var date = React.findDOMNode(this.refs.date).value.trim();
    var start_at = React.findDOMNode(this.refs.start_at).value.trim();
    var played_at = React.findDOMNode(this.refs.played_at).value.trim();
    var away = React.findDOMNode(this.refs.away).value.trim();
    var home = React.findDOMNode(this.refs.home).value.trim();
    if (!date || !level || !start_at || !played_at || !away || !home) {
      return;
    }
    this.props.onGameSubmit({level: level, date: date, start_at, start_at, played_at: played_at, away: away, home: home});
    React.findDOMNode(this.refs.level).value = '';
    React.findDOMNode(this.refs.date).value = '';
    React.findDOMNode(this.refs.start_at).value = '';
    React.findDOMNode(this.refs.played_at).value = '';
    React.findDOMNode(this.refs.away).value = '';
    React.findDOMNode(this.refs.home).value = '';

  },
  render: function() {
    var levelOptions = levels.map(function(option, index){
      return <option value={index}>{option}</option>;
    });
    var dateOptions = dates.map(function(option, index){
      return <option value={index}>{option}</option>;
    });
    var timeOptions = times.map(function(option, index){
      return <option value={index}>{option}</option>;
    });
    var fieldOptions = fields.map(function(option, index){
      return <option value={index}>{option}</option>;
    });
    var sortedTeams = teams.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1
      if (nameA > nameB)
        return 1
      return 0 //default return value (no sorting)
    })
    var teamOptions = sortedTeams.map(function(option, index){
      return <option value={option.id}>{option.name} - {option.id}</option>;
    });
    return (
      <form className="gameForm" onSubmit={this.handleSubmit}>
        <label>Level</label>
        <select ref="level">
          {levelOptions}
        </select>
        <label>Field</label>
        <select ref="played_at">
          {fieldOptions}
        </select>
        <label>Date</label>
        <select ref="date">
          {dateOptions}
        </select>
        <label>Time</label>
        <select ref="start_at">
          {timeOptions}
        </select>
        <label>Away</label>
        <select ref="away">
          {teamOptions}
        </select>
        <label>Home</label>
        <select ref="home">
          {teamOptions}
        </select>
        <input type="submit" value="POST" className="btn btn-lg"/>
      </form>
    );
  }
});

var GameBox = React.createClass({
  loadGamesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: groupedData(data)});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleGameSubmit: function(game) {
    var games = this.state.data;
    games.push(game);
    this.setState({data: games}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: game,
        success: function(data) {
          this.setState({data: groupedData(data)});
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
    this.setState({data: groupedData(games)})
    setInterval(this.loadGamesFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="gameBox">
        <LevelsList data={this.state.data} />
      </div>
    );
  }
});

<GameForm onGameSubmit={this.handleGameSubmit} />
