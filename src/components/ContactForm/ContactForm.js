import { useState } from "react";
import './style.css';

function ContactForm({ handleSubmit }) {

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

    return (
        <form className="m-3" action="https://submit.jotform.com/submit/211727980373057/"
            method="post" name="form_211727980373057"
            id="211727980373057" acceptCharset="utf-8"
            autoComplete="on" onSubmit={handleSubmit}>

            <div className="row">
                <div className="col-12 col-sm-6">
                    <label className="form-sub-label" htmlFor="first_4" id="sublabel_4_first"
                        aria-hidden="false"> First Name </label>
                    <input className="wide" type="text"
                        id="first_4" name="q4_name[first]"
                        data-component="first" aria-labelledby="sublabel_4_first" />
                </div>

                <div className="col-12 col-sm-6">
                    <label className="form-sub-label" htmlFor="last_4" id="sublabel_4_last"
                        aria-hidden="false"> Last Name </label>
                    <input className="wide" type="text"
                        id="last_4" name="q4_name[last]"
                        data-component="last" aria-labelledby="sublabel_4_last" />
                </div>

                <div className="col-12 col-sm-6">
                    <label className="form-sub-label" htmlFor="input_5" id="sublabel_input_5"
                        aria-hidden="false"> Email </label>
                    <input className="wide" id="input_5"
                        name="q5_email" size="10"
                        data-component="email" aria-labelledby="sublabel_input_5" />
                </div>

                <div className="col-12 col-sm-6">
                    <label className="form-sub-label" htmlFor="input_7_full" id="sublabel_7_masked"
                        aria-hidden="false"> Phone </label>
                    <input className="wide" type="tel"
                        id="input_7_full" name="q7_phoneNumber[full]"
                        data-type="mask-number" data-masked="true"
                        placeholder="(000) 000-0000" data-component="phone"
                        aria-labelledby="sublabel_7_masked" value={phone}
                        onChange={handlePhoneInput} onKeyDown={handleBackspace} />
                </div>
            </div>

            <div className="row">
                <div className="col col-12">
                    <label id="label_6" htmlFor="input_6"> Message </label>
                    <div className="wide" id="cid_6" data-layout="full">
                        <textarea className="wide" id="input_6"
                            name="q6_message" data-component="textarea"
                            aria-labelledby="label_6"></textarea>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col col-12">
                    <button className="btn btn-primary py-1">Submit</button>
                </div>
            </div>
        </form>

    )
}

export default ContactForm;