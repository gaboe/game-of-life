import * as React from "react";
import { Row } from "./Row";

type Props = {
  cells: GridCell[][];
};

const Grid = (props: Props) => {
  return (
    <div className="wrapper">
      {props.cells.map((x, i) => (
        <Row key={i} cells={x} />
      ))}
    </div>
  );
};

export { Grid };
