import './App.scss';
import Tracker from "./components/Tracker/Tracker"
import team from './data/workers';

function App() {
  return (
    <div className="App">
      <h1>Task Tracker</h1>
        <Tracker teamArr={team}  />
    </div>
  );
}

export default App;
