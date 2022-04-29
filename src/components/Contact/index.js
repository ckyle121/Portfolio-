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
                <div className="d-flex flex-column align-items-center">
                     <div><label htmlFor="name">Name: </label></div>
                    <input className="m-2" type="text" defaultValue={name} onBlur={handleChange} name="name" />
                    <div><label htmlFor="email">E-mail: </label></div>
                    <input className="m-2" type="email" defaultValue={email} name="email" onBlur={handleChange} />
                    <div><label htmlFor="message">Message: </label></div>
                    <textarea className="m-2 w-50" name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn" type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;