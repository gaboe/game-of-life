import * as React from "react";
import { Row } from "./Row";
type Props = {
  cells: GridCell[][];
};

const Grid = (props: Props) => {
  return (
    <div className="wrapper">
      {props.cells
        .concat()
        .sort((a, b) => b[0].y - a[0].y)
        .map((_, i) => (
          <Row key={i} cells={props.cells.map(e => e[i])} />
        ))}
    </div>
  );
};

export { Grid };
