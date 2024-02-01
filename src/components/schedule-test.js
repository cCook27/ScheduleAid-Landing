import React from "react";

import CheckIcon from "../assets/check-icon";
import ActionButton from "./action-button";

import "../css/schedule-test.css";

const ScheduleTest = ({ handleAlerts }) => {
  return (
    <div className="container-custom discover-cont">
      <div className="d-flex flex-column">
        <h4>Scheduling</h4>
        <div className="d-flex info-cont">
          <div className="d-flex sidexside">
            <div className="ratio ratio-16x9 video-schedule">
              <iframe src="https://www.youtube.com/embed/HauxKEmMlnM?si=qBghuuWqj-kjQuwL" title="Schedule Test" allowFullScreen></iframe>
            </div>
          </div>
          <div className="sidexside">
            <ul>
              <li><h5 className="py-2"><span className="mx-1"><CheckIcon /></span> Test the drive time viability with one click</h5></li>
              <li><h5 className="py-2"><span className="mx-1"><CheckIcon /></span> Keep track of scheduled patients</h5></li>
              <li><h5 className="pb-3 pt-2"><span className="mx-1"><CheckIcon /></span> View basic patient info at a glance</h5></li>
            </ul>
            <div className="d-flex justify-content-center pt-4">
              <ActionButton handleAlerts={handleAlerts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleTest;