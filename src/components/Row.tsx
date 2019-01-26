import React from "react";

type Props = { cells: GridCell[] };

const Row = (props: Props) => (
  <div>
    {props.cells.map(e => (
      <div key={e.y}>{`${e.x}-${e.y}`}</div>
    ))}
  </div>
);

export { Row };
