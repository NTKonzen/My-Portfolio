import { useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {

    const [formErrors, setErrors] = useState([]);

    function handleSubmit(e) {
        let { target: {
            0: { value: firstName },
            2: { value: email },
            3: { value: phoneNumber },
            4: { value: message }
        } } = e;
        let nameValid = firstName.length <= 15 && firstName.length > 0;
        let emailValid = /.{1,}@[^.]{1,}/.test(email);
        let phoneValid = /^\(\d{3}\) \d{3}-\d{4,8}$/.test(phoneNumber);
        let messageValid = message.length <= 500 && message.length > 0;
        // console.log("nameValid:", nameValid);
        // console.log("emailValid:", emailValid);
        // console.log("phoneValid:", phoneValid);
        // console.log("messageValid:", messageValid);
        if (![nameValid, emailValid, phoneValid, messageValid].every(v => v)) e.preventDefault();
        if (!nameValid) setErrors(p => p.concat(["Please provide at least your First Name"]));
    }

    return (
        <div>
            <Header isContact={true}></Header>
            <h1>Contact</h1>
            <div className="container">
                <div className="row">
                    <ContactForm handleSubmit={handleSubmit} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact;