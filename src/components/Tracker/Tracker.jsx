

import "./Tracker.scss";

const Tracker = (props) => {
      return (
      <span className="Tracker">
        <p>Name: {props.name}</p>
          <p>Role: {props.role}</p>
          <div className="Counter">
              <p>Counter</p>
          </div>
      </span>
    );
  };
  
  export default Tracker;


