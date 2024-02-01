import React from "react";

import CheckIcon from "../assets/check-icon";
import ActionButton from "./action-button";

import "../css/manage.css";

const Manage = ({ handleAlerts }) => {
  return (
    <div className="container-custom manage-cont">
      <div className="d-flex flex-column">
        <h4>Manage Patient Scheduling Info</h4>
        <div className="d-flex">
          <div className="d-flex sidexside">
            <div className="ratio ratio-16x9 video-manage">
              <iframe src="https://www.youtube.com/embed/vJM8HTR2RHs?si=GfwFBAmbio8ijKws" title="Schedule Test" allowFullScreen></iframe>
            </div>
          </div>
          <div className="sidexside ms-3">
            <ul>
              <li><h5 className="py-2"><span className="mx-1"><CheckIcon /></span> Take note of any schedule changes or requests</h5></li>
              <li><h5 className="py-2"><span className="mx-1"><CheckIcon /></span> Manage patient activity</h5></li>
              <li><h5 className="pb-3 pt-2"><span className="mx-1"><CheckIcon /></span> Determine patient frequency to be reflected in scheduling</h5></li>
              
            </ul>
            <div className="d-flex justify-content-center pt-4">
              <ActionButton handleAlerts={handleAlerts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
