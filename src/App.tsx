import * as React from "react";
import { Grid } from "./components/Grid";

const getIndexedArray = (l: number) => Array.from(Array(l), (_, x) => x);

const getCells = () =>
  getIndexedArray(30).map(x =>
    getIndexedArray(30).map(y => {
      return { active: true, x, y } as GridCell;
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
