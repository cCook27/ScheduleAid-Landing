import React from "react";

import ActionButton from "./action-button";

import '../css/offer.css';

const Offer = ({ handleAlerts }) => {
  return (
    <div className="container-custom offer-cont">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center p-3 pb-0">
          <h1>ScheduleAid</h1>
        </div>
        <p className="text-center hippa-texts p-0">HIPPA Compliant</p>
        <div className="d-flex justify-content-center py-3 offer-texts">
          <p className="text-center">We cut scheduling time down for home health pros so they can focus on their patients without the added hassels</p>
        </div>
        
        <div className="d-flex justify-content-center p-3 pt-0">
          <ActionButton handleAlerts={handleAlerts} />
        </div>
      </div>
    </div>
  )
};

export default Offer;

