import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    return (
      <div>
        <div onClick={this.handleTitleClick}>Adopt Me!</div>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
