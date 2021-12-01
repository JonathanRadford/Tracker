import React from "react";
import "./Tracker.scss";

const Tracker = (props) => {
  const {title, teamArr} = props
  const workerName = teamArr.map((team, index) => {
    return <div key={title + index} className="team-info"><h2>Name: </h2> <p> {team.name}</ p>  
            <h2>Name: </h2><p> {team.role} <div className="counter">
              <h2>Counter</h2>
          </div></ p></ div>     
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

  


