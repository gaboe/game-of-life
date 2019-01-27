import * as React from "react";
import { Grid } from "./Grid";
const getIndexedArray = (l: number) => Array.from(Array(l), (_, x) => x);

const getCells = () =>
  getIndexedArray(10).map(x =>
    getIndexedArray(10).map(y => {
      return { active: Math.random() >= 0.5, x, y } as GridCell;
    })
  );

type State = { cells: GridCell[][]; isRunning: boolean };
class Game extends React.Component<{}, State> {
  public state = { cells: getCells(), isRunning: false };
  public run = () => {
    console.log("running");
    this.setState({ cells: getCells(), isRunning: true });
    window.setTimeout(this.run, 1000);
  };

  public render() {
    return (
      <>
        <Grid cells={this.state.cells} />
        <button onClick={() => !this.state.isRunning && this.run()}>Run</button>
      </>
    );
  }
}

export { Game };
