import React from "react";
import "./Tracker.scss";
import Counter from "../Counter/Counter"

const Tracker = (props) => {
  const {title, teamArr} = props
  const workerName = teamArr.map((team, index) => {
   return <div key={title + index} className="team-info"><h2>Name: </h2> <p> {team.name}</ p>  
            <h2>Role: </h2><p> {team.role} </ p><div className="counter">
              <h2>Counter</h2>
              <Counter />
               </ div> </ div>     
  })
      return (
      <div>
        <div className="team">
          {workerName} 
          </div>     
      </div>
    );
  };
  export default Tracker;

  


