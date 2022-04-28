import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact()  {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message} = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section>
            <h2 className="display-4 text-center mb-4">Send Me a Message<MailOutlineIcon style={{ fill: 'white' }} fontSize="xx-large" className="icon mx-3" /></h2>
            <form onSubmit={handleSubmit} >
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-12">
                        <label htmlFor="name">Name:</label>
                        <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label htmlFor="email">E-mail address:</label>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="col-md-2 col-sm-6" type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;