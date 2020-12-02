import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import "./style.css";
import headshot from "../components/assets/images/Headshot.jpg";

function About() {
    return (
        <div>
            <Header isAbout={true}></Header>
            <main className="container-fluid py-3">

                <h1 className='text-center mb-2'>About Me</h1>

                <article className="row bg-dark py-5">

                    <img src={headshot} alt="A photo of me standing against a brick wall"
                        className="col-sm-12 col-md-6 col-xl-6"></img>

                    <div className="col-md-6 col-xl-6 pt-sm-4 pt-md-0">
                        <p>
                            I was born just over 21 years ago into a family of 6, including myself of course.
                            Growing up, it seemed that every role in our family was taken. There was my older brother, the athletic one,
                            my
                            sister, the rowdy one, and my little brother, the academic one. So in the end, all that left me with is tech!
                            So
                            of course like anyone who was the tech-savvy kid in their household, I grew up fixing the wifi when it shut
                            off
                            and setting up my parents phones whenever they got new ones. Unfortunately I was never able to explore my
                            fascination with software until rather recently when I signed up for a Full Stack Web Development Bootcamp
                            offered through the UCSD Extension Campus. I’m excited to say that in this bootcamp I have been progressing
                            well
                            and learning a lot from my teachers and classmates.
        </p>

                        <a className='btn btn-dark' href='https://github.com/NTKonzen' target='_blank'><i className="fab fa-github"></i> Find me
          on GitHub</a>

                        <a className='btn btn-blue' href='https://www.linkedin.com/in/nicholas-konzen-7160881b0/' target='_blank'><i
                            className="fab fa-linkedin"></i> Find me on LinkedIn</a>
                    </div>

                    <span className="col-12"></span>

                </article>

            </main>
            <Footer />
        </div>
    )
}

export default About;