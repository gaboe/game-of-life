import * as React from "react";
import { World } from "./World";

type State = { isRunning: boolean };
class Game extends React.Component<{}, State> {
  public state = { isRunning: false };

  public render() {
    return (
      <>
        <World isRunning={this.state.isRunning} />
        <button
          onClick={() => this.setState({ isRunning: !this.state.isRunning })}
        >
          {this.state.isRunning ? "Stop" : "Run"}
        </button>
      </>
    );
  }
}

export { Game };
