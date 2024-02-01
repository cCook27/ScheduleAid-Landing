import React from "react";

import CheckIcon from "../assets/check-icon";
import ActionButton from "./action-button";

import "../css/grouping.css";

const Grouping = ({ handleAlerts }) => {
  return (
    <div className="container-custom grouping-cont">
      <div className="d-flex flex-column">
        <h4>Grouping</h4>
        <div className="d-flex">
          <div className="sidexside ms-3">
            <ul>
              <li><h5 className="py-2"><span className="mx-1"><CheckIcon /></span> Automatically group patients by geographic location</h5></li>
              <li><h5 className="py-2"><span className="mx-1"><CheckIcon /></span> Manually group patients based on therapist preference</h5></li>
              <li><h5 className="pb-3 pt-2"><span className="mx-1"><CheckIcon /></span> Determine the number of geographic groups</h5></li>
              
            </ul>
            <div className="d-flex justify-content-center pt-4">
              <ActionButton handleAlerts={handleAlerts} />
            </div>
          </div>
          <div className="d-flex sidexside">
            <div className="ratio ratio-16x9 video-grouping">
              <iframe src="https://www.youtube.com/embed/j2zzNZHBkbs?si=nbciOHdR-sdd2_dT" title="Schedule Test" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grouping;
