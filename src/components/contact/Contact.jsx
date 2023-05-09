import React, { useState } from 'react'
import './contact.css'
// This is the contact form 


const Contact = () => {

        const [fullname, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
      
        const handleSubmit = (event) => {
          event.preventDefault();
          const formData = { fullname, email, message };
          fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
        }

  return (
    <div className='cont contact container'>
        <div className="banner">
            <div className='hero-title'>
                <h2>Feel proud be the part of revolution in <span>Africa</span></h2>
            </div>
            <div className="hero-desc">
                <p>Great futures are built with a small charity, be the reason someone smiles today. IDashU is a digital platform for collecting donations for those in need in africa.</p>
            </div>
        </div>
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <div className='contact-info'>
                    <label>Full Name</label>
                    <input type="text" value={fullname} onChange={e =>setName(e.target.value)} placeholder='Enter your fullname' />
                </div>
                <div className='contact-info'>
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your email' />
                </div>
                <div className='contact-info'>
                    <label>Message</label>
                    <textarea name="" id="" value={message} onChange={e => setMessage(e.target.value)} cols="10" rows="10"></textarea>
                </div>
                <div>
                    <input className='donateBtn' type="submit" value='Sign Up'/>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Contact