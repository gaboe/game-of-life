import React from "react";

type Props = { cell: GridCell };

const Cell = ({ cell }: Props) => (
  <div
    data-idc={`x:${cell.x};y:${cell.y}`}
    className={cell.active ? "cell active" : "cell"}
  >
    &nbsp;
  </div>
);

export { Cell };
