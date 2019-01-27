import * as React from "react";
import { Grid } from "./Grid";
const getIndexedArray = (l: number) => Array.from(Array(l), (_, x) => x);

const getCells = () =>
  getIndexedArray(4).map(x =>
    getIndexedArray(4).map(y => {
      return { active: Math.random() >= 0.5, x, y } as GridCell;
    })
  );

const CTI = (cell: GridCell) => (cell.active ? 1 : 0);

type State = { cells: GridCell[][]; isRunning: boolean };
class Game extends React.Component<{}, State> {
  public state = { cells: getCells(), isRunning: false };
  public run = () => {
    console.log("running");
    const cells = this.state.cells;

    const newCell = cells.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const getTopCellsCount = () => {
          const upperRow = cells[rowIndex + 1];
          const onTop = CTI(upperRow[colIndex]);
          const onTopLeft = colIndex > 0 ? CTI(upperRow[colIndex - 1]) : 0;
          const onTopRight =
            cells.length - 1 > colIndex ? CTI(upperRow[colIndex + 1]) : 0;

          return onTop + onTopLeft + onTopRight;
        };
        const topN =
          rowIndex > 1 && row.length - 1 > rowIndex ? getTopCellsCount() : 0;
        console.log(col.x, col.y, topN);
        return col;
      });
    });

    this.setState({ cells: newCell, isRunning: false });
    // this.setState({ cells: newCell, isRunning: true });
    // window.setTimeout(this.run, 1000);
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
