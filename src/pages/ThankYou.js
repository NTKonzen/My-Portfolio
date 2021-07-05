import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Contact() {

    return (
        <div>
            <Header isContact={true}></Header>
            <div className="container-fluid pt-3">
                <h1 className='text-center mb-2'>Contact</h1>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card p-3 thanks-card">
                            <h2 className="text-center thanks">Thank you!</h2>
                            <h4 className="text-center thanks-message">Your message has been sent</h4>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact;