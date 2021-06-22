import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_vu43aqa";
const TEMPLATE_ID = "template_l8ec3wi";
const USER_ID = "user_eYTKd7AWgueRY3pTqwnfk";

function Contact() {
    const [formState, setFormState] = useState({from_name: '', reply_to: '', message: ''});
    const { from_name, reply_to, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'reply_to') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        };

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                // icon: 'success',
                title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                // icon: 'error',
                title: 'Ooops, something went wrong',
                text: error.text,
                })
            });
            e.target.reset()
        setFormState({...formState, name: '', email: '', message: ''});
        Array.from(document.querySelectorAll(".form-control")).forEach(
            input => (input.value = "")
        )    
    };

    return (
        
        <section>
          <h1>Contact me</h1>
          <span>My Info: <a href = "mailto:frank.depaolo@yahoo.com" target="_blank" rel="noopener noreferrer" className="unlink">frank.depaolo@yahoo.com</a> / (469)-955-2779</span>
          <form id="contact-form" className='' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name" >Name:</label>
                <div className='d-flex justify-content-center'>
                    <input type="text" className='form-control col-md-5' defaultValue={from_name} onBlur={handleChange} name="from_name" id="from_name" />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="email" >Email address:</label>
                <div className='d-flex justify-content-center'>
                    <input type="email" className='form-control col-md-5' defaultValue={reply_to} onBlur={handleChange}  name="reply_to" id="reply_to" />
                </div>
                <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message:</label>
                <div className='d-flex justify-content-center'>
                    <textarea name="message" className='form-control col-md-5' defaultValue={message} onBlur={handleChange}  rows="5" />
                </div>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
    )
}

export default Contact;