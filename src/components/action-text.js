import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import '../css/action-button.css';

const ActionText = ({ handleAlerts }) => {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const isFormFilled = userName !== '' && userEmail !== '';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7h6l1j2', 'template_udwfu8r', form.current, 'wLYZCwyNGuTe-MHOZ')
      .then((result) => {
        handleAlerts(result.text);
        setUserName('');
        setUserEmail('');

      }, (error) => {
          console.log(error.text);
      });
  };

  const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

  const handleEmailChange = (event) => {
      setUserEmail(event.target.value);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input className='form-control my-2' placeholder='Jane Doe' type="text" name="user_name" value={userName} onChange={handleNameChange} />
      <input className='form-control my-2' type="email" placeholder='example@email.com' name="user_email" value={userEmail} onChange={handleEmailChange} />
      <textarea className='form-control my-2' name="user_comment" rows={3} placeholder='Tell us what else would help or send us a question!'></textarea>
      <button className='reserve' type="submit" disabled={!isFormFilled}>Stay in the Loop!</button>
    </form>
  );
};

export default ActionText;