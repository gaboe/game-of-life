import * as React from "react";
import { Grid } from "./components/Grid";

const getIndexedArray = (l: number) => Array.from(Array(l), (_, x) => x);

const getCells = () =>
  getIndexedArray(10).map(x =>
    getIndexedArray(10).map(y => {
      return { active: Math.random() >= 0.5, x, y } as GridCell;
    })
  );
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Grid cells={getCells()} />
      </div>
    );
  }
}

export default App;
