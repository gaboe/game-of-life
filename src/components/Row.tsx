import React from "react";
import { Cell } from "./Cell";

type Props = { cells: GridCell[] };

const Row = (props: Props) => (
  <div>
    {props.cells.map(e => (
      <Cell key={e.y} cell={e} />
    ))}
  </div>
);

export { Row };
