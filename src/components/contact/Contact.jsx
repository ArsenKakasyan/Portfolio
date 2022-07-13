import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Geo from "../../img/geo.png"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_8g8n4ff', 
        'template_vsby30m', 
        formRef.current, 
        'axbacLPFFGXfpFuDk')
      .then(
          (result) => {
          console.log(result.text);
          setDone(true)
      }, 
      (error) => {
          console.log(error.text);
      }
      );
      e.target.reset();
    };
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's talk your idea through</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} 
                        alt="" 
                        className="c-icon" />
                        +7 963 0241 161
                    </div>
                    <div className="c-info-item">
                        <img src={Email} 
                        alt="" 
                        className="c-icon" />
                        archee.busy@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Geo} 
                        alt="" 
                        className="c-icon" />
                        Russia
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className='c-desc'>
                    <b>What's your story?</b> Always learn and stay in touch with the latest tech available,
                    freelance everything I come across.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="user_name" />
                    <input type="text" placeholder='Subject' name="user_subject" />
                    <input type="text" placeholder='Email' name="user_email" />
                    <textarea row="5" placeholder='Message' name="message"/>
                    <button>Submit</button>
                    {done && "Thank you..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact