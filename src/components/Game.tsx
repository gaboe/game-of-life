import * as React from "react";
import { Grid } from "./Grid";
const getIndexedArray = (l: number) => Array.from(Array(l), (_, x) => x);

const getCells = () =>
  getIndexedArray(4).map(y =>
    getIndexedArray(4).map(x => {
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
        const getLowerCellsCount = () => {
          if (row.length - 1 <= rowIndex) {
            return 0;
          }
          const lowerRow = cells[rowIndex + 1];
          const onBottom = CTI(lowerRow[colIndex]);
          const onBottomLeft = colIndex > 0 ? CTI(lowerRow[colIndex - 1]) : 0;
          const onBottomRight =
            cells.length - 1 > colIndex ? CTI(lowerRow[colIndex + 1]) : 0;

          return onBottom + onBottomLeft + onBottomRight;
        };
        const lowerCount = getLowerCellsCount();
        console.log(`x: `, col.x, "y:", col.y, " = ", lowerCount);
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
