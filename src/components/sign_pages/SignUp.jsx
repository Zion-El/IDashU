import React, { useState } from 'react';
import '../contact/contact.css'

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully!');
      // Here you can add the code to send the form data to the server
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.firstName) {
      errors.firstName = 'Please enter your first name';
    }
    if (!data.lastName) {
      errors.lastName = 'Please enter your last name';
    }
    if (!data.email) {
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!data.password) {
      errors.password = 'Please enter your password';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

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
    <form autoComplete='off' onSubmit={handleSubmit}>
      <div className='contact-info'>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div className='contact-info'>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div className='contact-info'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className='contact-info'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className='contact-info'>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <button className='donateBtn' type='submit'>Submit</button>
    </form>
    </div>

</div>

  )
}
export default SignUpForm