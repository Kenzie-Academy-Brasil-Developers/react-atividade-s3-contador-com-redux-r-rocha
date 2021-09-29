import "./App.css";
import Display from "./components/Display";
import Counter from "./components/Counter";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container flexDirection="column" alignItems="center">
          <Grid item>
            <Display />
          </Grid>
          <Grid item>
            <Counter />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
