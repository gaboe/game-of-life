import { Grid } from "./Grid";

import * as React from "react";
type State = { cells: GridCell[][] };
type Props = { isRunning: boolean };

const getIndexedArray = (l: number) => Array.from(Array(l), (_, x) => x);

const dimension = 80;
const getCells = () =>
  getIndexedArray(dimension).map(y =>
    getIndexedArray(dimension).map(x => {
      return { active: Math.random() >= 0.4, x, y } as GridCell;
    })
  );

const CTI = (cell: GridCell) => (cell.active ? 1 : 0);
const getCount = (
  cells: GridCell[][],
  row: GridCell[],
  rowIndex: number,
  colIndex: number
) => {
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

  const getUpperCellsCount = () => {
    if (rowIndex === 0) {
      return 0;
    }
    const upperRow = cells[rowIndex - 1];
    const onUpper = CTI(upperRow[colIndex]);
    const onUpperLeft = colIndex > 0 ? CTI(upperRow[colIndex - 1]) : 0;
    const onUpperRight =
      cells.length - 1 > colIndex ? CTI(upperRow[colIndex + 1]) : 0;

    return onUpper + onUpperLeft + onUpperRight;
  };

  const lowerCount = getLowerCellsCount();
  const upperCount = getUpperCellsCount();

  const left = colIndex > 0 ? CTI(row[colIndex - 1]) : 0;
  const right = cells.length - 1 > colIndex ? CTI(row[colIndex + 1]) : 0;

  return lowerCount + upperCount + left + right;
};

const getNewState = (cell: GridCell, count: number) => {
  if (cell.active) {
    return count === 2 || count === 3;
  }
  return count === 3;
};

class World extends React.Component<Props, State> {
  public state = { cells: getCells() };

  public componentWillReceiveProps(nextProps: Readonly<Props>) {
    console.log("Word received props");
    if (nextProps.isRunning) {
      window.setTimeout(this.run, 200);
    }
  }

  public run = () => {
    if (!this.props.isRunning) {
      return;
    }
    const cells = this.state.cells;

    const newCells = cells.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        const count = getCount(cells, row, rowIndex, colIndex);
        return { ...col, ...{ active: getNewState(col, count) } };
      });
    });

    window.setTimeout(this.run, 400);

    this.setState({ cells: newCells });
  };

  public render() {
    return <Grid cells={this.state.cells} />;
  }
}

export { World };
