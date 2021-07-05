import { useState, useEffect } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";
import ErrorDisplay from "../components/ErrorDisplay/ErrorDisplay";

function Contact() {

    const [formErrors, setErrors] = useState([]);

    function handleSubmit(e) {
        let newErrors = [];
        let { target: {
            0: { value: firstName },
            1: { value: lastName },
            2: { value: email },
            3: { value: phoneNumber },
            4: { value: message }
        } } = e;
        firstName = firstName.trim();
        email = email.trim();
        message = message.trim();
        let firstValid = firstName.length <= 15 && firstName.length > 0;
        let lastValid = lastName.length <= 15;
        let emailValid = /.{1,}@[^.]{1,}/.test(email);
        let phoneValid = /^\(\d{3}\) \d{3}-\d{4,8}$/.test(phoneNumber);
        let messageValid = message.length <= 500 && message.length > 0;
        if (!firstValid) {
            if (!firstName) newErrors.push("Please provide at least your First Name");
            else newErrors.push("First Name cannot exceed 15 characters");
        }
        if (!lastValid) newErrors.push("Last name cannot exceed 15 characters")
        if (!emailValid || !phoneValid) {
            if (!email && !phoneNumber) {
                newErrors.push("Please provide either an email or a phone number");
            } else {
                if (email && phoneNumber) {
                    if (!emailValid) newErrors.push("The email provided must match the following format: johndoe@email.com");
                    if (!phoneValid) newErrors.push("The phone number provided must match the following format: (000) 000-0000");
                } else if (email && !phoneNumber) {
                    if (!emailValid) newErrors.push("The email provided must match the following format: johndoe@email.com");
                    else phoneValid = true;
                } else if (phoneNumber && !email) {
                    if (!phoneValid) newErrors.push("The phone number provided must match the following format: (000) 000-0000");
                    else emailValid = true;
                }
            }
        }
        if (!messageValid) {
            if (!message) newErrors.push('Please enter a message in the box labelled "Message"');
            else newErrors.push("Message cannot exceed 500 characters");
        }
        if (![firstValid, emailValid, phoneValid, messageValid].every(v => v)) e.preventDefault();
        setErrors(newErrors)
    }

    return (
        <div>
            <Header isContact={true}></Header>
            <div className="container-fluid pt-3">
                <h1 className='text-center mb-2'>Contact</h1>
                <ErrorDisplay formErrors={formErrors} />
                <ContactForm handleSubmit={handleSubmit} />
                <Footer />
            </div>
        </div>
    )
}

export default Contact;