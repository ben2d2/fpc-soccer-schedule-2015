var Header = React.createClass({
  render: function() {
    return (
      <div id="sidebar">
        Buster's blog
      </div>
    );
  }
});


React.render(
  <Header/>,
  document.getElementById('header')
);
