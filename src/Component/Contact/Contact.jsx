import React, { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../Context';
import './Contact.css';
import phone from '../../ima/phone.png';
import email from '../../ima/email.png';
import address from '../../ima/address.png';

export const Contact = () => {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false);
    const [formState, setFormState] = useState({
        user_name: '',
        user_subject: '',
        user_email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_m790474', // Service ID
            'template_pksn745', // Template ID
            formRef.current,
            'pC3eCQsBjvhDuQ4in' // User ID (public key from EmailJS)
        ).then((result) => {
            console.log('SUCCESS!', result.text);
            setDone(true);
            setFormState({
                user_name: '',
                user_subject: '',
                user_email: '',
                message: '',
            });
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    };

    return (
        <div className='c'>
            <div className="c-b"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="Phone" className='c-icon' />+918736001357
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="Email" className='c-icon' />contact@singhshagun05072003@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="Address" className='c-icon' />civil line, U.P.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            style={{ backgroundColor: darkMode ? "#333" : "#fff" }}
                            type="text"
                            placeholder='Name'
                            name='user_name'
                            value={formState.user_name}
                            onChange={handleChange}
                        />
                        <input
                            style={{ backgroundColor: darkMode ? "#333" : "#fff" }}
                            type="text"
                            placeholder='Subject'
                            name='user_subject'
                            value={formState.user_subject}
                            onChange={handleChange}
                        />
                        <input
                            style={{ backgroundColor: darkMode ? "#333" : "#fff" }}
                            type="text"
                            placeholder='Email'
                            name='user_email'
                            value={formState.user_email}
                            onChange={handleChange}
                        />
                        <textarea
                            style={{ backgroundColor: darkMode ? "#333" : "#fff" }}
                            placeholder='Message'
                            name="message"
                            rows="5"
                            value={formState.message}
                            onChange={handleChange}
                        ></textarea>
                        <button>Submit</button>
                        {done && (
                            <div className="thank-you">
                                Thank you!!!
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};
