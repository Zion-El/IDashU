import React, { useState } from 'react'
import '../components/contact/contact.css'
// import { handlePayment } from './paystack';
import { PaystackButton } from 'react-paystack'


const Donate = () => {

    const publicKey = 'pk_test_b867401df9e1cfc2365ee62ffcd0889c5d73368c'
    const [email, setEmail] = useState("")
    const [fullname, setName] = useState("")
    const [amount, setAmount] = useState("")


    console.log(process.env.PAYSTACK_KEY);
    const componentProps = {
        email,
        amount,
        metadata: {
          fullname
        },
        publicKey,
        text: "Donate Now",
        onSuccess: () =>
          alert("Thanks for helping Lives"),
        onClose: () => alert("Wait! You need to do this now!!!"),
      }

  return (
    <div className='contact container'>
        <div className="banner">
            <div className='hero-title'>
                <h2>Feel proud be the part of revolution in <span>Africa</span></h2>
            </div>
            <div className="hero-desc">
                <p>Great futures are built with a small charity, be the reason someone smiles today. IDashU is a digital platform for collecting donations for those in need in africa.</p>
            </div>
        </div>
        <div className="form">
            <form onSubmit={e => e.preventDefault()}>
                <div className='contact-info'>
                    <label>Full Name</label>
                    <input type="text" value={fullname} onChange={e =>setName(e.target.value)} placeholder='Enter your fullname' />
                </div>
                <div className='contact-info'>
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your email' />
                </div>
                <div className='contact-info'>
                    <label>Amount</label>
                    <input type="text" onChange={e => setAmount(e.target.value * 100)} placeholder='How much are you donating?'/>
                </div>
                <div>
                    <PaystackButton className="donateBtn" {...componentProps} />
                </div>
            </form>
        </div>

    </div>
  )
}

export default Donate