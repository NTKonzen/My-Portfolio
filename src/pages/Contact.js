import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";

function Contact() {

    return (
        <div>
            <Header isContact={true}></Header>
            <h1>Contact</h1>
            <div className="container">
                <div className="row">
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact;