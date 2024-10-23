import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FcOk } from "react-icons/fc";
const ContactForm = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const isValidEmail= (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  const handleSubmit = (e) => {
    if (!isValidEmail(email))
        return;
    e.preventDefault();
    emailjs
      .sendForm('service_ogeoz39', 'template_o85eh7p', form.current, {
        publicKey: '8D4W_PSq1S4t_2mJX',
      })
      .then(
        () => {
          setIsSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    useEffect(()=>{
      if (isSuccess === true)
      {
        setTimeout(()=>{
          setIsSuccess(false);
  
          if (form.current) {
            const formElements = form.current.elements;
            
            for (let i = 0; i < formElements.length; i++) {
              const element = formElements[i];            
              if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = '';
              }
            }
          }
        }, 5000);
      }
    }, [isSuccess]);

    const isFormValid = () => {
      return name.trim() && email && isValidEmail(email) && subject.trim() && message.trim();
    };
  return (
    <>
      {
        isSuccess ? (
          <div className='flex flex-row items-center border rounded-lg w-4/5 p-2'>
            <p className='text-2xl text-center font-semibold p-3 text-white'>Your request has been submitted successfully to Mourad Denguir</p>
            <FcOk size={100} />
          </div>
        ) : (
          <>
            <div className="border p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  {
                    email && !isValidEmail(email) && <p className='text-red-500'>The email is invalid</p>
                  }
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:ring focus:ring-blue-300"
                    rows="4"
                  />
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    type="submit"
                    disabled={!isFormValid()}  // Button is disabled if form is invalid
                    className={`w-2/5 py-2 rounded font-semibold transition text-white ${isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </>
        )
      }
    </>
  );
};

export default ContactForm;