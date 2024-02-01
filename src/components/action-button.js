import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../css/action-button.css';

const ActionButton = ({ handleAlerts }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7h6l1j2', 'template_udwfu8r', form.current, 'wLYZCwyNGuTe-MHOZ')
      .then((result) => {
        handleAlerts(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input className='form-control my-2' placeholder='Jane Doe' type="text" name="user_name" />
      <input className='form-control my-2' type="email" placeholder='example@email.com' name="user_email" />
      <input className='reserve' type="submit" value="Stay in the Loop!" />
    </form>
  );
};

export default ActionButton;