import { Button, Typography } from "@material-ui/core";
import Slider from "@material-ui/lab/Slider";
import * as React from "react";
import { World } from "./World";
type State = { isRunning: boolean; variance: number };
class Game extends React.Component<{}, State> {
  public state = { isRunning: false, variance: 0.5 };

  public render() {
    return (
      <div className="game">
        <World
          isRunning={this.state.isRunning}
          variance={this.state.variance}
        />
        <div>
          <Typography>Active variance: {this.state.variance}</Typography>
          <Slider
            style={{ marginTop: 10 }}
            min={0}
            max={1}
            value={this.state.variance}
            aria-labelledby="label"
            onChange={(_, value) =>
              this.setState({ variance: value, isRunning: false })
            }
          />
          <Button
            style={{ marginTop: 10 }}
            variant="contained"
            color="primary"
            onClick={() => this.setState({ isRunning: !this.state.isRunning })}
          >
            {this.state.isRunning ? "Stop" : "Run"}
          </Button>
        </div>
      </div>
    );
  }
}

export { Game };
