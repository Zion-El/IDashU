import React, { useState } from 'react'
// this is the signIn in page

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { email, password};
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
<div className='signIN contact container'>
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
              <label>Email</label>
              <input required type="email" value={fullname} onChange={e =>setEmail(e.target.value)} placeholder='Enter your fullname' />
          </div>
          <div className='contact-info'>
              <label>Password</label>
              <input required type="password" value={email} onChange={e => setPassword(e.target.value)} placeholder='Enter your email' />
          </div>
          <div>
              <input className='donateBtn' type="submit" value='Sign In'/>
          </div>
      </form>
  </div>

</div>
)
}

export default SignIn