$(".js-toggle").click(function(e) {
  var klass = $(e.currentTarget).data("name");

  $("#level").hide();
  $( "." + klass ).show();
});

$(function() {
  $("#threefour").addClass("active");
});

var converter = new Showdown.converter();

var levels = ["threefour", "fivek", "firstsecond", "thirdfourth", "fifthsixth"];
var dates = ["03/28/2015", "04/11/2015", "04/18/2015", "04/25/2015", "05/02/2015", "05/09/2015", "05/16/2015"];
var times = ["8:30am","9:30am","10:30am","11:30am","12:30pm","12:45pm", "1:30pm", "2:30pm", "3:30pm", "4:30pm", "1:55pm","3:05pm","4:15pm"];
var fields = ["Front of brown shed", "Under big Oak tree", "Closest to the bridge", "Lower Complex", "Upper Complex", "Middle of Complex", "Furthest from road", "5th and 6th grade field"];
var threefour = [
  {"id": "11","name": "Adair","color": "royalblue","contact": "Bill Adair"},
  {"id": "12","name": "Warth","color": "teal","contact": "Drew Warth"},
  {"id": "13","name": "DeVries/Walker","color": "pink","contact": "Adam DeVries/Ryan Walker"},
  {"id": "14","name": "Russ","color": "white","contact": "Ben Russ"},
  {"id": "15","name": "McGuigan","color": "gray","contact": "Joe Pat McGuigan"},
  {"id": "16","name": "Brandau","color": "navy","contact": "Alex Brandau"},
  {"id": "17","name": "Smith","color": "teal","contact": "Eric Smith"},
  {"id": "18","name": "Miller","color": "orange","contact": "Matt Miller"},
  {"id": "19","name": "Haraf/Murrel","color": "black","contact": "Frank Haraf/Nathan Murrel"},
  {"id": "110","name": "Stoddard","color": "green","contact": "Wes Stoddard"},
  {"id": "111","name": "Dacus","color": "lime","contact": "Ryan Dacus"},
  {"id": "112","name": "Frericks","color": "white","contact": "Ashley Frericks"},
  {"id": "113","name": "Brunner/Brackman","color": "lime","contact": "L. Brunner/A. Brackman"},
  {"id": "114","name": "Vernier/Laskaris","color": "yellow","contact": "Emy Vernier/M. Laskaris"},
  {"id": "115","name": "Skipper/Wooten/Rich","color": "green","contact": "H. Skipper/J. Wooten/J. Rich"},
  {"id": "116","name": "Barrett","color": "skyblue","contact": "Jack Barrett"},
  {"id": "117","name": "The Rathe's","color": "purple","contact": "Grant and Amanda Rathe"},
  {"id": "118","name": "Schultz","color": "red","contact": "Josh Schultz"}
];
var fivek = [
  {"id": "21","name": "Nichols","color": "orange","contact": "Tim Nichols"},
  {"id": "22","name": "Duckworth","color": "maroon","contact": "Melissa Duckworth"},
  {"id": "23","name": "Spaeth","color": "white","contact": "Jason Spaeth"},
  {"id": "24","name": "Damp","color": "gray","contact": "Julia Damp"},
  {"id": "25","name": "Arthur","color": "navy","contact": "Scott Arthur"},
  {"id": "26","name": "Rivera","color": "green","contact": "Gaston Rivera"},
  {"id": "27","name": "Luedtke/Weaver","color": "black","contact": "R. Luedtke/C. Weaver"},
  {"id": "28","name": "Davis","color": "royalblue","contact": "Berkley Davis"},
  {"id": "29","name": "Beaird/DeVries","color": "red","contact": "Ryan Beaird/Adam DeVries"},
  {"id": "210","name": "Campos","color": "skyblue","contact": "Fabian Campos"},
  {"id": "211","name": "Little/Theobald","color": "maroon","contact": "Amanda Little/R. Theobald"},
  {"id": "212","name": "Austin","color": "teal","contact": "Eric Austin"},
  {"id": "213","name": "McGuire","color": "royalblue","contact": "Rob McGuire"},
  {"id": "214","name": "Sharpe","color": "purple","contact": "Josh Sharpe"},
  {"id": "215","name": "Holstein","color": "lime","contact": "Chris Holstein"},
  {"id": "216","name": "Cowles","color": "orange","contact": "Kevin Cowles"},
  {"id": "217","name": "Gaylon","color": "pink","contact": "Martha Gaylon"},
  {"id": "218","name": "Bryson","color": "skyblue","contact": "Adam Bryson"}
];

var firstsecond = [
  {"id": "31", "name": "Edwards", "color": "pink", "contact": "Derek Edwards"},
  {"id": "32", "name": "Porter", "color": "white", "contact": "Drake Porter"},
  {"id": "33", "name": "Porter", "color": "pink", "contact": "Drake Porter"},
  {"id": "34", "name": "Gaither", "color": "white", "contact": "Mark Gaither"},
  {"id": "35", "name": "King", "color": "skyblue", "contact": "Tim King "},
  {"id": "36", "name": "Schultz/Lott", "color": "red", "contact": "Josh Schultz/Kris Lott"},
  {"id": "37", "name": "Thorton", "color": "gray", "contact": "Jim Thorton"},
  {"id": "38", "name": "Cherry", "color": "purple", "contact": "Leslie Cherry"},
  {"id": "39", "name": "Thurman", "color": "lime", "contact": "Patrick Thurman"},
  {"id": "310", "name": "Welborn", "color": "green", "contact": "Joe Welborn"},
  {"id": "311", "name": "Burton", "color": "yellow", "contact": "Jamie Burton"},
  {"id": "312", "name": "Milek/Meier", "color": "purple", "contact": "Jason Milek/Shad Meier"},
  {"id": "313", "name": "Ricciardelli", "color": "teal", "contact": "Nancy Ricciardelli"},
  {"id": "314", "name": "Mitchell", "color": "skyblue", "contact": "Chris Mitchell"},
  {"id": "315", "name": "Frost", "color": "yellow", "contact": "Jason Frost"},
  {"id": "316", "name": "McDaniel", "color": "black", "contact": "Thomas McDaniel"},
  {"id": "317", "name": "Hauser", "color": "maroon", "contact": "Laura Hauser"},
  {"id": "318", "name": "Franke", "color": "navy", "contact": "Robert Franke"},
  {"id": "319", "name": "Spengler", "color": "royalblue", "contact": "Craig Spengler"},
  {"id": "320", "name": "Peebles", "color": "lime", "contact": "Sam Peebles"}
]

var thirdfourth = [
  {"id": "41", "name": "Cedano","color": "black", "contact": "Anthony Cedano"},
  {"id": "42", "name": "Jacobs","color": "gray", "contact": "Robert Jacobs"},
  {"id": "43", "name": "M.Smith","color": "orange", "contact": "Mike Smith"},
  {"id": "44", "name": "Hagan","color": "navy", "contact": "Kevin Hagan"},
  {"id": "45", "name": "Perry","color": "royalblue", "contact": "Jim Perry "},
  {"id": "46", "name": "C.Smith","color": "white", "contact": "Christy Smith"},
  {"id": "47", "name": "Burton","color": "yellow", "contact": "Jamie Burton"},
  {"id": "48", "name": "Mitchell","color": "skyblue", "contact": "Chris Mitchell"},
  {"id": "49", "name": "Cooper","color": "teal", "contact": "Graham Cooper"},
  {"id": "410", "name": "Laufer","color": "navy", "contact": "Spencer Laufer"},
  {"id": "411", "name": "Ashworth/Martin","color": "skyblue", "contact": "K. Ashworth/M. Martin"},
  {"id": "412", "name": "Nicholson","color": "red", "contact": "Ryan Nicholson"},
  {"id": "413", "name": "Price","color": "pink", "contact": "Sterling Price"},
  {"id": "414", "name": "Pensinger","color": "royalblue", "contact": "Sharon Pensinger"},
  {"id": "415", "name": "Andreades","color": "gray", "contact": "Haley Andreades"}
]

var fifthsixth =[
  {"id": "51", "name": "Drumm", "color": "green", "contact": "Shannon Drumm"},
  {"id": "52", "name": "Thorton", "color": "purple", "contact": "Jim Thorton"},
  {"id": "53", "name": "Lawrence", "color": "maroon", "contact": "liz Lawrence"},
  {"id": "54", "name": "Johnston", "color": "lime", "contact": "Will Johnston"},
  {"id": "55", "name": "Blackburn", "color": "navy", "contact": "Mike Blackburn "},
  {"id": "56", "name": "Marmolejo", "color": "white", "contact": "David Marmolejo"},
  {"id": "57", "name": "Cotterman", "color": "teal", "contact": "Shelly Cotterman"},
  {"id": "58", "name": "Clark", "color": "red", "contact": "Chip Clark"}
]

colors = [
  { "royalblue": { "bg": "#4169e1", "font": "#fff"}},
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

var teams = threefour.concat(fivek).concat(firstsecond).concat(thirdfourth).concat(fifthsixth);

var games = [
    {
        "level": "0",
        "date": "3",
        "start_at": "0",
        "played_at": "0",
        "away": "111",
        "home": "118"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "1",
        "played_at": "0",
        "away": "113",
        "home": "116"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "2",
        "played_at": "0",
        "away": "19",
        "home": "13"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "3",
        "played_at": "0",
        "away": "110",
        "home": "12"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "0",
        "played_at": "1",
        "away": "114",
        "home": "115"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "1",
        "played_at": "1",
        "away": "112",
        "home": "12"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "2",
        "played_at": "1",
        "away": "18",
        "home": "14"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "3",
        "played_at": "1",
        "away": "16",
        "home": "17"
    },
    {
        "level": "0",
        "date": "3",
        "start_at": "4",
        "played_at": "1",
        "away": "11",
        "home": "15"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "0",
        "played_at": "0",
        "away": "116",
        "home": "114"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "1",
        "played_at": "0",
        "away": "16",
        "home": "11"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "2",
        "played_at": "0",
        "away": "117",
        "home": "113"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "3",
        "played_at": "0",
        "away": "118",
        "home": "112"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "0",
        "played_at": "1",
        "away": "17",
        "home": "115"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "1",
        "played_at": "1",
        "away": "12",
        "home": "111"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "2",
        "played_at": "1",
        "away": "13",
        "home": "110"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "3",
        "played_at": "1",
        "away": "15",
        "home": "18"
    },
    {
        "level": "0",
        "date": "4",
        "start_at": "4",
        "played_at": "1",
        "away": "14",
        "home": "19"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "0",
        "played_at": "0",
        "away": "18",
        "home": "16"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "1",
        "played_at": "0",
        "away": "112",
        "home": "12"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "2",
        "played_at": "0",
        "away": "110",
        "home": "14"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "3",
        "played_at": "0",
        "away": "115",
        "home": "116"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "0",
        "played_at": "1",
        "away": "19",
        "home": "15"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "1",
        "played_at": "1",
        "away": "11",
        "home": "17"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "2",
        "played_at": "1",
        "away": "114",
        "home": "117"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "3",
        "played_at": "1",
        "away": "111",
        "home": "13"
    },
    {
        "level": "0",
        "date": "5",
        "start_at": "4",
        "played_at": "1",
        "away": "113",
        "home": "118"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "0",
        "played_at": "0",
        "away": "17",
        "home": "116"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "1",
        "played_at": "0",
        "away": "15",
        "home": "110"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "2",
        "played_at": "0",
        "away": "118",
        "home": "114"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "3",
        "played_at": "0",
        "away": "117",
        "home": "115"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "0",
        "played_at": "1",
        "away": "13",
        "home": "112"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "1",
        "played_at": "1",
        "away": "11",
        "home": "18"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "2",
        "played_at": "1",
        "away": "12",
        "home": "113"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "3",
        "played_at": "1",
        "away": "16",
        "home": "19"
    },
    {
        "level": "0",
        "date": "6",
        "start_at": "4",
        "played_at": "1",
        "away": "14",
        "home": "111"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "0",
        "played_at": "2",
        "away": "27",
        "home": "24"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "1",
        "played_at": "2",
        "away": "29",
        "home": "213"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "2",
        "played_at": "2",
        "away": "21",
        "home": "25"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "3",
        "played_at": "2",
        "away": "218",
        "home": "217"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "4",
        "played_at": "2",
        "away": "214",
        "home": "212"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "6",
        "played_at": "2",
        "away": "211",
        "home": "215"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "7",
        "played_at": "2",
        "away": "26",
        "home": "22"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "8",
        "played_at": "2",
        "away": "28",
        "home": "23"
    },
    {
        "level": "1",
        "date": "3",
        "start_at": "9",
        "played_at": "2",
        "away": "216",
        "home": "210"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "0",
        "played_at": "2",
        "away": "21",
        "home": "26"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "1",
        "played_at": "2",
        "away": "217",
        "home": "211"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "2",
        "played_at": "2",
        "away": "210",
        "home": "218"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "3",
        "played_at": "2",
        "away": "214",
        "home": "29"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "4",
        "played_at": "2",
        "away": "212",
        "home": "216"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "6",
        "played_at": "2",
        "away": "24",
        "home": "28"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "7",
        "played_at": "2",
        "away": "23",
        "home": "22"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "8",
        "played_at": "2",
        "away": "215",
        "home": "213"
    },
    {
        "level": "1",
        "date": "4",
        "start_at": "9",
        "played_at": "2",
        "away": "25",
        "home": "27"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "0",
        "played_at": "2",
        "away": "26",
        "home": "23"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "1",
        "played_at": "2",
        "away": "218",
        "home": "212"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "2",
        "played_at": "2",
        "away": "213",
        "home": "217"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "3",
        "played_at": "2",
        "away": "211",
        "home": "210"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "4",
        "played_at": "2",
        "away": "29",
        "home": "215"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "6",
        "played_at": "2",
        "away": "22",
        "home": "24"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "7",
        "played_at": "2",
        "away": "27",
        "home": "21"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "8",
        "played_at": "2",
        "away": "216",
        "home": "214"
    },
    {
        "level": "1",
        "date": "5",
        "start_at": "9",
        "played_at": "2",
        "away": "28",
        "home": "25"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "0",
        "played_at": "2",
        "away": "27",
        "home": "26"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "1",
        "played_at": "2",
        "away": "214",
        "home": "218"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "2",
        "played_at": "2",
        "away": "216",
        "home": "29"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "3",
        "played_at": "2",
        "away": "217",
        "home": "215"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "4",
        "played_at": "2",
        "away": "212",
        "home": "211"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "6",
        "played_at": "2",
        "away": "24",
        "home": "23"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "7",
        "played_at": "2",
        "away": "210",
        "home": "213"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "8",
        "played_at": "2",
        "away": "25",
        "home": "22"
    },
    {
        "level": "1",
        "date": "6",
        "start_at": "9",
        "played_at": "2",
        "away": "21",
        "home": "28"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "0",
        "played_at": "4",
        "away": "310",
        "home": "34"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "1",
        "played_at": "4",
        "away": "316",
        "home": "319"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "2",
        "played_at": "4",
        "away": "315",
        "home": "320"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "3",
        "played_at": "4",
        "away": "318",
        "home": "317"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "0",
        "played_at": "3",
        "away": "33",
        "home": "38"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "1",
        "played_at": "3",
        "away": "32",
        "home": "39"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "2",
        "played_at": "3",
        "away": "311",
        "home": "36"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "3",
        "played_at": "3",
        "away": "35",
        "home": "39"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "4",
        "played_at": "3",
        "away": "31",
        "home": "312"
    },
    {
        "level": "2",
        "date": "3",
        "start_at": "6",
        "played_at": "3",
        "away": "37",
        "home": "313"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "0",
        "played_at": "4",
        "away": "313",
        "home": "312"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "1",
        "played_at": "4",
        "away": "315",
        "home": "317"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "2",
        "played_at": "4",
        "away": "319",
        "home": "320"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "3",
        "played_at": "4",
        "away": "316",
        "home": "318"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "0",
        "played_at": "3",
        "away": "38",
        "home": "35"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "1",
        "played_at": "3",
        "away": "39",
        "home": "310"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "2",
        "played_at": "3",
        "away": "38",
        "home": "36"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "3",
        "played_at": "3",
        "away": "31",
        "home": "311"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "4",
        "played_at": "3",
        "away": "33",
        "home": "37"
    },
    {
        "level": "2",
        "date": "4",
        "start_at": "6",
        "played_at": "3",
        "away": "32",
        "home": "34"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "0",
        "played_at": "4",
        "away": "38",
        "home": "31"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "1",
        "played_at": "4",
        "away": "315",
        "home": "319"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "2",
        "played_at": "4",
        "away": "318",
        "home": "320"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "3",
        "played_at": "4",
        "away": "317",
        "home": "316"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "0",
        "played_at": "3",
        "away": "314",
        "home": "311"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "1",
        "played_at": "3",
        "away": "312",
        "home": "310"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "2",
        "played_at": "3",
        "away": "313",
        "home": "32"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "3",
        "played_at": "3",
        "away": "39",
        "home": "33"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "4",
        "played_at": "3",
        "away": "35",
        "home": "34"
    },
    {
        "level": "2",
        "date": "5",
        "start_at": "6",
        "played_at": "3",
        "away": "37",
        "home": "36"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "0",
        "played_at": "4",
        "away": "38",
        "home": "34"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "1",
        "played_at": "4",
        "away": "316",
        "home": "320"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "2",
        "played_at": "4",
        "away": "315",
        "home": "318"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "3",
        "played_at": "4",
        "away": "35",
        "home": "313"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "0",
        "played_at": "3",
        "away": "317",
        "home": "319"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "1",
        "played_at": "3",
        "away": "32",
        "home": "312"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "2",
        "played_at": "3",
        "away": "33",
        "home": "310"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "3",
        "played_at": "3",
        "away": "311",
        "home": "37"
    },
    {
        "level": "2",
        "date": "6",
        "start_at": "4",
        "played_at": "3",
        "away": "36",
        "home": "31"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "0",
        "played_at": "5",
        "away": "412",
        "home": "49"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "1",
        "played_at": "5",
        "away": "48",
        "home": "411"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "2",
        "played_at": "5",
        "away": "41",
        "home": "45"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "3",
        "played_at": "5",
        "away": "411",
        "home": "414"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "0",
        "played_at": "6",
        "away": "42",
        "home": "44"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "1",
        "played_at": "6",
        "away": "46",
        "home": "43"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "2",
        "played_at": "6",
        "away": "410",
        "home": "413"
    },
    {
        "level": "3",
        "date": "3",
        "start_at": "3",
        "played_at": "6",
        "away": "47",
        "home": "415"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "0",
        "played_at": "5",
        "away": "41",
        "home": "46"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "1",
        "played_at": "5",
        "away": "45",
        "home": "42"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "2",
        "played_at": "5",
        "away": "44",
        "home": "43"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "3",
        "played_at": "5",
        "away": "414",
        "home": "412"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "0",
        "played_at": "6",
        "away": "410",
        "home": "47"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "1",
        "played_at": "6",
        "away": "49",
        "home": "413"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "2",
        "played_at": "6",
        "away": "411",
        "home": "47"
    },
    {
        "level": "3",
        "date": "4",
        "start_at": "3",
        "played_at": "6",
        "away": "48",
        "home": "415"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "0",
        "played_at": "5",
        "away": "41",
        "home": "42"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "1",
        "played_at": "5",
        "away": "414",
        "home": "47"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "2",
        "played_at": "5",
        "away": "412",
        "home": "410"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "3",
        "played_at": "5",
        "away": "414",
        "home": "48"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "0",
        "played_at": "6",
        "away": "46",
        "home": "44"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "1",
        "played_at": "6",
        "away": "45",
        "home": "43"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "2",
        "played_at": "6",
        "away": "415",
        "home": "49"
    },
    {
        "level": "3",
        "date": "5",
        "start_at": "3",
        "played_at": "6",
        "away": "411",
        "home": "413"
    },
    {
        "level": "3",
        "date": "6",
        "start_at": "0",
        "played_at": "5",
        "away": "43",
        "home": "41"
    },
    {
        "level": "3",
        "date": "6",
        "start_at": "1",
        "played_at": "5",
        "away": "42",
        "home": "46"
    },
    {
        "level": "3",
        "date": "6",
        "start_at": "2",
        "played_at": "5",
        "away": "412",
        "home": "415"
    },
    {
        "level": "3",
        "date": "6",
        "start_at": "0",
        "played_at": "6",
        "away": "44",
        "home": "45"
    },
    {
        "level": "3",
        "date": "6",
        "start_at": "1",
        "played_at": "6",
        "away": "48",
        "home": "410"
    },
    {
        "level": "3",
        "date": "6",
        "start_at": "2",
        "played_at": "6",
        "away": "49",
        "home": "414"
    },
    {
        "level": "4",
        "date": "3",
        "start_at": "5",
        "played_at": "7",
        "away": "51",
        "home": "53"
    },
    {
        "level": "4",
        "date": "3",
        "start_at": "10",
        "played_at": "7",
        "away": "56",
        "home": "57"
    },
    {
        "level": "4",
        "date": "3",
        "start_at": "11",
        "played_at": "7",
        "away": "58",
        "home": "52"
    },
    {
        "level": "4",
        "date": "3",
        "start_at": "12",
        "played_at": "7",
        "away": "54",
        "home": "55"
    },
    {
        "level": "4",
        "date": "4",
        "start_at": "5",
        "played_at": "7",
        "away": "58",
        "home": "53"
    },
    {
        "level": "4",
        "date": "4",
        "start_at": "10",
        "played_at": "7",
        "away": "54",
        "home": "56"
    },
    {
        "level": "4",
        "date": "4",
        "start_at": "11",
        "played_at": "7",
        "away": "51",
        "home": "52"
    },
    {
        "level": "4",
        "date": "4",
        "start_at": "12",
        "played_at": "7",
        "away": "55",
        "home": "57"
    },
    {
        "level": "4",
        "date": "5",
        "start_at": "5",
        "played_at": "7",
        "away": "57",
        "home": "54"
    },
    {
        "level": "4",
        "date": "5",
        "start_at": "10",
        "played_at": "7",
        "away": "53",
        "home": "55"
    },
    {
        "level": "4",
        "date": "5",
        "start_at": "11",
        "played_at": "7",
        "away": "56",
        "home": "52"
    },
    {
        "level": "4",
        "date": "5",
        "start_at": "12",
        "played_at": "7",
        "away": "51",
        "home": "58"
    },
    {
        "level": "4",
        "date": "6",
        "start_at": "5",
        "played_at": "7",
        "away": "56",
        "home": "57"
    },
    {
        "level": "4",
        "date": "6",
        "start_at": "10",
        "played_at": "7",
        "away": "51",
        "home": "52"
    },
    {
        "level": "4",
        "date": "6",
        "start_at": "11",
        "played_at": "7",
        "away": "55",
        "home": "58"
    },
    {
        "level": "4",
        "date": "6",
        "start_at": "12",
        "played_at": "7",
        "away": "53",
        "home": "54"
    }
];


function findById(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id === id) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}

function buildHash(groups, keysArray, key){
  return Object.keys(groups).map( function( group )
  {
    return { key: keysArray[group], value: groups[group] };
  })
};

function groupBy( array , attr, keysArray, key )
{
  var groups = {};
  array.forEach( function( o )
  {
    var group = attr(o);
    groups[group] = groups[group] || [];
    groups[group].push( o );
  });
  return buildHash(groups, keysArray, key);
};

function groupedData(data) {
  var groupedByLevel = groupBy(data, function(item)
  {
    return item.level;
  }, levels, "level");
  var groupedByLevelAndDate = groupedByLevel.map( function(object) {
    var datesGroup = groupBy(object.value, function(item){
      return item.date;
    }, dates, "date");
    return {
      level: object.key,
      dates: datesGroup
    }
  });
  var groupedByLevelAndDateAndField = groupedByLevelAndDate.map( function(object) {
    var groupedByDate = object.dates.map( function(o) {
      var groupedByField = groupBy(o.value, function(item) {
        return item.played_at;
      }, fields, "field");
      var groupedByFieldWithKeys = groupedByField.map( function(foo) {
        return {
          field: foo.key,
          games: foo.value
        }
      });
      return {
        date: o.key,
        fields: groupedByFieldWithKeys
      }
    });
    return {
      level: object.level,
      dates: groupedByDate
    }
  });
  return groupedByLevelAndDateAndField;
};

var GameBox = React.createClass({
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

var Games = React.createClass({
  render: function() {
    var awayTeam = findById(teams,this.props.data.away);
    var homeTeam = findById(teams,this.props.data.home);
    return (
      <div className="gameRow row">
        <div className="col-sm-2">{times[this.props.data.start_at]}</div>
        <div className="col-sm-4"><span className="team-color" style={{backgroundColor: awayTeam.color}}></span>{awayTeam.name}</div>
        <div className="col-sm-2">@</div>
        <div className="col-sm-4"><span className="team-color" style={{backgroundColor: homeTeam.color}}></span>{homeTeam.name}</div>
      </div>
    );
  }
});

var GamesList = React.createClass({
  render: function() {
    var gameNodes = this.props.data.map(function(game, index) {
      return (
        <Games data={game} key={index}/>
      );
    });
    return (
      <div className="gameList">
        {gameNodes}
      </div>
    );
  }
});

var Fields = React.createClass({
  render: function() {
    return (
      <div className="fieldRow">
        Field #{fields.indexOf(this.props.data.field, 0) + 1} {this.props.data.field}
        <GamesList data={this.props.data.games} />
      </div>
    );
  }
});

var FieldsList = React.createClass({
  render: function() {
    var fieldNodes = this.props.data.map(function(field, index) {
      return (
        <Fields data={field} key={index}/>
      );
    });
    return (
      <div className="fieldList">
        {fieldNodes}
      </div>
    );
  }
});

var Dates = React.createClass({
  render: function() {
    return (
      <div className="dateRow">
        <h4>{this.props.data.date}</h4>
        <FieldsList data={this.props.data.fields} />
      </div>
    );
  }
});

var DatesList = React.createClass({
  render: function() {
    var dateNodes = this.props.data.map(function(date, index) {
      return (
        <Dates data={date} key={index}/>
      );
    });
    return (
      <div className="dateList">
        {dateNodes}
      </div>
    );
  }
});

var Levels = React.createClass({
  render: function() {
    return (
      <div className="levelRow">
        <DatesList data={this.props.data.dates} />
      </div>
    );
  }
});

var LevelsList = React.createClass({
  render: function() {
    var levelNodes = this.props.data.map(function(level, index) {
      var klass = level.level == "threefour" ? "tab-pane active" : "tab-pane";
      return (
        <div id={level.level} role="tabpanel" className={klass}>
          <Levels data={level} key={index}/>
        </div>
      );
    });
    return (
      <div className="levelList tab-content">
        {levelNodes}
      </div>
    );
  }
});

React.render(
  <GameBox url="games.json" pollInterval={200000} />,
  document.getElementById('content')
);
