import { useState } from "react";

function ContactForm() {

    const [phone, setPhone] = useState('');

    function handlePhoneInput({ target: { value: v } }) {
        v = v.replace(/[^\d]/g, '');
        const currentLength = v.length;
        let newNumber = '';

        if (v.length) {
            if (v.length <= 3) {
                newNumber = `(${v})`
            } else if (currentLength <= 6) {
                newNumber = `(${v.slice(0, 3)}) ${v.slice(3)}`
            } else {
                newNumber = `(${v.slice(0, 3)}) ${v.slice(3, 6)}-${v.slice(6, 14)}`
            }
        }
        setPhone(newNumber)
    }

    function handleBackspace({ key, target: { value: v } }) {
        if (key == "Backspace") {
            v = v.replace(/[^\d]/g, '');
            let newNumber = "";
            if (v.length && v.length <= 3) {
                newNumber = v.slice(0, v.length - 1)
                handlePhoneInput({ target: { value: newNumber } })
            }
        }
    }

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
    }

    return (
        <form className="jotform-form" action="https://submit.jotform.com/submit/211727980373057/"
            method="post" name="form_211727980373057"
            id="211727980373057" acceptCharset="utf-8"
            autoComplete="on" onSubmit={handleSubmit}>

            <label className="form-sub-label" htmlFor="first_4" id="sublabel_4_first"
                aria-hidden="false"> First Name </label>
            <input type="text" id="first_4" name="q4_name[first]" size="10"
                data-component="first" aria-labelledby="sublabel_4_first" />

            <label className="form-sub-label" htmlFor="last_4" id="sublabel_4_last"
                aria-hidden="false"> Last Name </label>
            <input type="text" id="last_4" name="q4_name[last]" size="15"
                data-component="last" aria-labelledby="sublabel_4_last" />

            <label className="form-sub-label" htmlFor="input_5" id="sublabel_input_5"
                aria-hidden="false"> Email </label>
            <input id="input_5" name="q5_email"
                size="10" data-component="email" aria-labelledby="sublabel_input_5" />

            <label className="form-sub-label" htmlFor="input_7_full" id="sublabel_7_masked"
                aria-hidden="false"> Please enter a valid phone number. </label>
            <input type="tel" id="input_7_full" name="q7_phoneNumber[full]" data-type="mask-number"
                data-masked="true" placeholder="(000) 000-0000"
                data-component="phone" aria-labelledby="sublabel_7_masked"
                value={phone} onChange={handlePhoneInput} onKeyDown={handleBackspace} />

            <label id="label_6" htmlFor="input_6"> Message </label>
            <div id="cid_6" data-layout="full">
                <textarea id="input_6" name="q6_message"
                    data-component="textarea" aria-labelledby="label_6"></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default ContactForm;