import './App.scss';
import Tracker from "./components/Tracker/Tracker"
import team from './data/workers';


const names = team.map(worker => {
  console.log(worker.name)
  return worker.name 
})

function App() {
  return (
    <div className="App">
        <Tracker name={names} role={team[0].role}  />
        <Tracker name={names} role={team[0].role}  />
        <Tracker name={names} role={team[0].role}  />
        <Tracker name={names} role={team[0].role}  />
    </div>
  );
}

export default App;
