import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fhg86u6', 'template_3evwkg9',form.current, '3eoMa6MzGJkNqdA3d')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div class="container-fluid d-flex justify-content-center contact" id="4">
    <form ref={form} className='text-center' onSubmit={sendEmail} style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact Me</h2>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' name="user_name" />

      <MDBInput type='email' label='Email address' v-model='email' name="user_email" wrapperClass='mb-4' />


      <MDBTextArea wrapperClass='mb-4' label='Message' name="message" />


      <MDBBtn color='primary' block className='my-4' value="Send" type="submit">
        Send
      </MDBBtn>
    </form>
    </div>
  );
}