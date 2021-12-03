import './App.scss';
import Tracker from "./components/Tracker/Tracker"
import team from './data/workers';

function App() {
  return (
    
    <div className="App">
      <h1>Ticket Tracker</h1>
        <Tracker title="Position" teamArr={team}  />
    </div>
  );
}

export default App;
