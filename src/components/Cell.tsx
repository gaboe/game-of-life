import React from "react";

type Props = { cell: GridCell };

const Cell = ({ cell }: Props) => (
  <div className={cell.active ? "cell active" : "cell"}>&nbsp;</div>
);

export { Cell };
