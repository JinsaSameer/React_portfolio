import '../../styles/Header.css';
import '../../styles/contact.css';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Header from '../Header';
import Footer from '../Footer';
function Contact() {
  
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and message
     /*if (inputType === 'firstName') {
        setFirstName(inputValue);
      } else if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }*/
    switch (inputType)
    {
      case 'firstName':
        setFirstName(inputValue);
      break;
      case 'email':
        setEmail(inputValue);
      break;
      case 'message':
         setMessage(inputValue);
      break;
      default:
        setMessage(inputValue);
        break;

    }
  
    };
    
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email))  {
        setErrorMessage('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      
      alert(`Hello ${firstName} Message has been sent`);
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setFirstName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      
      <div>
        <Header />
        <h2>Contact me</h2>
         <form className="form" >
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text" 
            placeholder="First name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="type here"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Footer />
      </div>
    );
  }
  
  export default Contact;
  
