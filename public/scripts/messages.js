var converter = new Showdown.converter();

var levels = ["Three - Four", "Five - Kindergarten", "First - Second Grade", "Third - Fourth Grade", "Fifth - Sixth Grade"];
var dates = ["03/28/2015", "04/11/2015", "04/18/2015", "04/25/2015", "05/02/2015", "05/09/2015", "05/16/2015"];
var times = ["8:30am","9:30am","10:30am","11:30am","12:30pm","12:45pm","1:55pm","3:05pm","4:15pm"];
var fields = ["Front of brown shed", "Under big Oak tree", "Closest to the bridge", "Lower Complex", "Upper Complex", "Middle of Complex", "Furthest from road", "5th and 6th grade field"];
var threefour = [
  {"id": 11,"name": "Adair","color": "royal","contact": "Bill Adair"},
  {"id": 12,"name": "Warth","color": "teal","contact": "Drew Warth"},
  {"id": 13,"name": "DeVries/Walker","color": "pink","contact": "Adam DeVries/Ryan Walker"},
  {"id": 14,"name": "Russ","color": "white","contact": "Ben Russ"},
  {"id": 15,"name": "McGuigan","color": "gray","contact": "Joe Pat McGuigan"},
  {"id": 16,"name": "Brandau","color": "navy","contact": "Alex Brandau"},
  {"id": 17,"name": "Smith","color": "teal","contact": "Eric Smith"},
  {"id": 18,"name": "Miller","color": "orange","contact": "Matt Miller"},
  {"id": 19,"name": "Haraf/Murrel","color": "black","contact": "Frank Haraf/Nathan Murrel"},
  {"id": 110,"name": "Stoddard","color": "green","contact": "Wes Stoddard"},
  {"id": 111,"name": "Dacus","color": "lime","contact": "Ryan Dacus"},
  {"id": 112,"name": "Frericks","color": "white","contact": "Ashley Frericks"},
  {"id": 113,"name": "Brunner/Brackman","color": "lime","contact": "L. Brunner/A. Brackman"},
  {"id": 114,"name": "Vernier/Laskaris","color": "yellow","contact": "Emy Vernier/M. Laskaris"},
  {"id": 115,"name": "Skipper/Wooten/Rich","color": "green","contact": "H. Skipper/J. Wooten/J. Rich"},
  {"id": 116,"name": "Barrett","color": "skyblue","contact": "Jack Barrett"},
  {"id": 117,"name": "The Rathe's","color": "purple","contact": "Grant and Amanda Rathe"},
  {"id": 118,"name": "Schultz","color": "red","contact": "Josh Schultz"}
];
var fivek = [
  {"id": 21,"name": "Nichols","color": "orange","contact": "Tim Nichols"},
  {"id": 22,"name": "Duckworth","color": "maroon","contact": "Melissa Duckworth"},
  {"id": 23,"name": "Spaeth","color": "white","contact": "Jason Spaeth"},
  {"id": 24,"name": "Damp","color": "gray","contact": "Julia Damp"},
  {"id": 25,"name": "Arthur","color": "navy","contact": "Scott Arthur"},
  {"id": 26,"name": "Rivera","color": "green","contact": "Gaston Rivera"},
  {"id": 27,"name": "Luedtke/Weaver","color": "black","contact": "R. Luedtke/C. Weaver"},
  {"id": 28,"name": "Davis","color": "royal","contact": "Berkley Davis"},
  {"id": 29,"name": "Beaird/DeVries","color": "red","contact": "Ryan Beaird/Adam DeVries"},
  {"id": 210,"name": "Campos","color": "skyblue","contact": "Fabian Campos"},
  {"id": 211,"name": "Little/Theobald","color": "maroon","contact": "Amanda Little/R. Theobald"},
  {"id": 212,"name": "Austin","color": "teal","contact": "Eric Austin"},
  {"id": 213,"name": "McGuire","color": "royal","contact": "Rob McGuire"},
  {"id": 214,"name": "Sharpe","color": "purple","contact": "Josh Sharpe"},
  {"id": 215,"name": "Holstein","color": "lime","contact": "Chris Holstein"},
  {"id": 216,"name": "Cowles","color": "orange","contact": "Kevin Cowles"},
  {"id": 217,"name": "Gaylon","color": "pink","contact": "Martha Gaylon"},
  {"id": 218,"name": "Bryson","color": "skyblue","contact": "Adam Bryson"}
];

var firstsecond = [
  {"id": 31, "name": "Edwards", "color": "pink", "contact": "Derek Edwards"},
  {"id": 32, "name": "Porter", "color": "white", "contact": "Drake Porter"},
  {"id": 33, "name": "Porter", "color": "pink", "contact": "Drake Porter"},
  {"id": 34, "name": "Gaither", "color": "white", "contact": "Mark Gaither"},
  {"id": 35, "name": "King", "color": "skyblue", "contact": "Tim King "},
  {"id": 36, "name": "Schultz/Lott", "color": "red", "contact": "Josh Schultz/Kris Lott"},
  {"id": 37, "name": "Thorton", "color": "gray", "contact": "Jim Thorton"},
  {"id": 38, "name": "Cherry", "color": "purple", "contact": "Leslie Cherry"},
  {"id": 39, "name": "Thurman", "color": "lime", "contact": "Patrick Thurman"},
  {"id": 310, "name": "Welborn", "color": "green", "contact": "Joe Welborn"},
  {"id": 311, "name": "Burton", "color": "yellow", "contact": "Jamie Burton"},
  {"id": 312, "name": "Milek/Meier", "color": "purple", "contact": "Jason Milek/Shad Meier"},
  {"id": 313, "name": "Ricciardelli", "color": "teal", "contact": "Nancy Ricciardelli"},
  {"id": 314, "name": "Mitchell", "color": "skyblue", "contact": "Chris Mitchell"},
  {"id": 315, "name": "Frost", "color": "yellow", "contact": "Jason Frost"},
  {"id": 316, "name": "McDaniel", "color": "black", "contact": "Thomas McDaniel"},
  {"id": 317, "name": "Hauser", "color": "maroon", "contact": "Laura Hauser"},
  {"id": 318, "name": "Franke", "color": "navy", "contact": "Robert Franke"},
  {"id": 319, "name": "Spengler", "color": "royal", "contact": "Craig Spengler"},
  {"id": 320, "name": "Peebles", "color": "lime", "contact": "Sam Peebles"}
]

var thirdfourth = [
  {"id": 41, "name": "Cedano","color": "black", "contact": "Anthony Cedano"},
  {"id": 42, "name": "Jacobs","color": "gray", "contact": "Robert Jacobs"},
  {"id": 43, "name": "M.Smith","color": "orange", "contact": "Mike Smith"},
  {"id": 44, "name": "Hagan","color": "navy", "contact": "Kevin Hagan"},
  {"id": 45, "name": "Perry","color": "royal", "contact": "Jim Perry "},
  {"id": 46, "name": "C.Smith","color": "white", "contact": "Christy Smith"},
  {"id": 47, "name": "Burton","color": "yellow", "contact": "Jamie Burton"},
  {"id": 48, "name": "Mitchell","color": "skyblue", "contact": "Chris Mitchell"},
  {"id": 49, "name": "Cooper","color": "teal", "contact": "Graham Cooper"},
  {"id": 410, "name": "Laufer","color": "navy", "contact": "Spencer Laufer"},
  {"id": 411, "name": "Ashworth/Martin","color": "skyblue", "contact": "K. Ashworth/M. Martin"},
  {"id": 412, "name": "Nicholson","color": "red", "contact": "Ryan Nicholson"},
  {"id": 413, "name": "Price","color": "pink", "contact": "Sterling Price"},
  {"id": 414, "name": "Pensinger","color": "royal", "contact": "Sharon Pensinger"},
  {"id": 415, "name": "Andreades","color": "gray", "contact": "Haley Andreades"}
]

var fifthsixth =[
  {"id": 51, "name": "Drumm", "color": "green", "contact": "Shannon Drumm"},
  {"id": 52, "name": "Thorton", "color": "purple", "contact": "Jim Thorton"},
  {"id": 53, "name": "Lawrence", "color": "maroon", "contact": "liz Lawrence"},
  {"id": 54, "name": "Johnston", "color": "lime", "contact": "Will Johnston"},
  {"id": 55, "name": "Blackburn", "color": "navy", "contact": "Mike Blackburn "},
  {"id": 56, "name": "Marmolejo", "color": "white", "contact": "David Marmolejo"},
  {"id": 57, "name": "Cotterman", "color": "teal", "contact": "Shelly Cotterman"},
  {"id": 58, "name": "Clark", "color": "red", "contact": "Chip Clark"}
]

colors = [
  { "royal": { "bg": "#4169e1", "font": "#fff"}},
  { "teal": { "bg": "#008080", "font": "#fff"}},
  { "pink": { "bg": "#FFC0CB", "font": "#333"}},
  { "white": { "bg": "#F5F5F5", "font": "#333"}},
  { "gray": { "bg": "#808080", "font": "#fff"}},
  { "navy": { "bg": "#000080", "font": "#fff"}},
  { "orange": { "bg": "#FFA500", "font": "#333"}},
  { "black": { "bg": "#000000", "font": "#fff"}},
  { "green": { "bg": "#008000", "font": "#fff"}},
  { "lime": { "bg": "#00FF00", "font": "#333"}},
  { "yellow": { "bg": "#FFFF00", "font": "#fff"}},
  { "red": { "bg": "#FF0000", "font": "#fff"}},
  { "skyblue": { "bg": "#87CEEB", "font": "#333"}},
  { "purple": { "bg": "#800080", "font": "#fff"}},
  { "maroon": { "bg": "#800000", "font": "#fff"}}
]




var teams = threefour;

var Game = React.createClass({
  render: function() {
    return (
      <div className="game">
        <div className="gameItem">
          {levels[this.props.data.level]} - {fields[this.props.data.played_at]} - {times[this.props.data.start_at]} - {teams[this.props.data.away].name} - {teams[this.props.data.home].name}
        </div>
      </div>
    );
  }
});

var GameBox = React.createClass({
  loadGamesFromServer: function() {
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
    this.loadGamesFromServer();
    setInterval(this.loadGamesFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="gameBox">
        <GameForm onGameSubmit={this.handleGameSubmit} />
        <GameList data={this.state.data} />
      </div>
    );
  }
});

var GameList = React.createClass({
  render: function() {
    var gameNodes = this.props.data.map(function(game, index) {
      return (
        <Game data={game} key={index}>
          {game.date}
        </Game>
      );
    });
    return (
      <div className="gameList">
        {gameNodes}
      </div>
    );
  }
});

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
    var teamOptions = teams.map(function(option, index){
      return <option value={index}>{option.name}</option>;
    });
    return (
      <form className="gameForm" onSubmit={this.handleSubmit}>
        <label>Level</label>
        <select ref="level">
          {levelOptions}
        </select>
        <label>Date</label>
        <select ref="date">
          {dateOptions}
        </select>
        <label>Time</label>
        <select ref="start_at">
          {timeOptions}
        </select>
        <label>Field</label>
        <select ref="played_at">
          {fieldOptions}
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

React.render(
  <GameBox url="games.json" pollInterval={200000} />,
  document.getElementById('content')
);
