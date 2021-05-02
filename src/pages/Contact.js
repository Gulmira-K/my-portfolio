import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

export default function Contact() {
  const [send, setSend] = useState(false)

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_n4vmfn9', 'template_z9yzdhm', e.target, 'user_2hdExOIX9wVyOmOGCs1Wl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
    setSend(true)
  }

  return (
    <div className='Contact'>
      <div className='tag'>&lt;div class="<span className='header'>contact-me</span>"&gt;</div>
      {!send ?  <p className='contact-text'>Feel free to reach out to me using this form.</p> : ''}
        {!send ?
          <form className="fontact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Name' className='name-input'/>
            <input type="email" name="email" placeholder='E-mail' className='email-input'/>
            <textarea name="message" placeholder='Message' className='message-input'/>
            <input type="submit" value="Send message" className='btn'/>
          </form>
          :
          <div className='success-message'>Thank you for the message. I will get back to you as soon as possible!</div>
        }
       <div className='tag'>&lt;/div&gt;</div>
    </div>
    
  );
}