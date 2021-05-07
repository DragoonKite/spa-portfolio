import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
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
    };

    return (
        
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" className='' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <div className='d-flex justify-content-center'>
                    <input type="text" className='form-control col-md-5' defaultValue={name} onBlur={handleChange} name="name" />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email address:</label>
                <div className='d-flex justify-content-center'>
                    <input type="email" className='form-control col-md-5' defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
            </div>
            <div className='form-group'>
                <label htmlFor="message">Message:</label>
                <div className='d-flex justify-content-center'>
                    <textarea name="message" className='form-control col-md-5' defaultValue={message} onBlur={handleChange} rows="5" />
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