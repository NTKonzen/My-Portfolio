import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

function Contact() {
    return (
        <div>
            <Header isContact={true}></Header>
            <h1>Contact</h1>
            <Footer />
        </div>
    )
}

export default Contact;