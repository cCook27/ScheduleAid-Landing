import React from "react";
import { useState } from "react";

import Offer from "./components/offer";
import ScheduleTest from "./components/schedule-test";
import Grouping from "./components/grouping";
import Manage from "./components/manage";
import About from "./components/About";

import './app.css';

const App = () => {
  const [okAlert, setOkAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleAlerts = (alert) => {
    if (alert === 'OK') {
      setOkAlert(true);
    } else {
      setErrorAlert(true);
    }
  };

  const handleClose = () => {
    setOkAlert(false);
    setErrorAlert(false);
  }
  
  return (
    <div className="over-all">

      {okAlert ?
        <div className="alert-cont">
          <div className="alert alert-info alert-dismissible fade show" role="alert">
            <strong>Success!</strong> You're awesome! We'll keep you updated on the launch. Thanks!
            <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
        : ''
      }

      {errorAlert ?
        <div className="alert-cont">
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Whoops</strong> Looks like something went wrong, try again!
            <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
        : ''
      }

      <div className="row offer flexy">
        <div className="col">
          <Offer handleAlerts={handleAlerts} />
        </div>
      </div>

      <div className="row flexy">
        <div className="col">
          <div className="d-flex justify-content-center p-3 pb-0">
            <h1 className="find">What You'll Find</h1>
          </div>
        </div>
      </div>

      <div className="row schedule-test flexy">
        <div className="col">
          <ScheduleTest handleAlerts={handleAlerts} />
        </div>
      </div>

      <div className="row grouping flexy">
        <div className="col">
          <Grouping />
        </div>
      </div>

      <div className="row manage flexy">
        <div className="col">
          <Manage handleAlerts={handleAlerts} />
        </div>
      </div>

      <div className="row about flexy">
        <div className="col">
          <About />
        </div>
      </div>
    </div>
  );
};

export default App;