import './App.scss';
import Tracker from "./components/Tracker/Tracker"
import team from './data/workers';

function App() {
  console.log(team[0].name);
  return (
    <div className="App">
        <Tracker name={team[0].name} role={team[0].role}  />
        <Tracker name={team[1].name} role={team[1].role}  />
        <Tracker name={team[2].name} role={team[2].role}  />
        <Tracker name={team[3].name} role={team[3].role}  />
        <Tracker name={team[4].name} role={team[4].role}  />
        <Tracker name={team[5].name} role={team[5].role}  />
        <Tracker name={team[6].name} role={team[6].role}  />
        <Tracker name={team[7].name} role={team[7].role}  />
        <Tracker name={team[8].name} role={team[8].role}  />
        <Tracker name={team[9].name} role={team[9].role}  />
    </div>
  );
}

export default App;
