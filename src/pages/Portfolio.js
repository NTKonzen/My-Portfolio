import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "../components/Header/style.css";

import innScreenshot from "../components/assets/images/inn-screenshot.jpeg";
import mealPlanner from "../components/assets/images/mealplanner-screenshot.jpeg";
import quizScreenshot from "../components/assets/images/quiz-screenshot.jpeg";
import trackerScreenshot from "../components/assets/images/tracker-screenshot.jpeg";
import generatorScreenshot from "../components/assets/images/generator-screenshot.jpeg";

function Portfolio() {
    return (
        <div>
            <Header isPortfolio={true}></Header>
            <main className="container-fluid p-0 pt-3">

                <h1 className='text-center mb-3'>Portfolio</h1>

                <div id="carouselExampleIndicators" className="carousel slide mt-1" data-ride="carousel" data-interval='false'>

                    <ol className="carousel-indicators my-4">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>

                    <div className="carousel-inner">

                        <div className="carousel-item active bg-dark">

                            <img className="d-block w-100" src={innScreenshot} alt="First slide"></img>

                            <div className="carousel-caption bg-dark mb-5">

                                <h2 className='project-title'>Inn at the Edge of Copyright</h2>

                                <p className='project-description px-3'>The Inn at the Edge of Copyright is a text-based program for anyone with a crave for an adventure. Our project is a MUD or Multi-User-Dungeon RPG loosely based on The Hitchhiker's Guide to the Galaxy series by Douglas Adams and inspired by text-based MUDs of the early days of the internet. The Inn At The Edge is where all who are lost can find a home.</p>

                                <a className='btn btn-dark' href='https://github.com/n-lambert/Inn-At-The-Edge-of-Copyright' target='_blank' rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                    View on GitHub
                                </a>

                                <a className='btn btn-green' target='_blank' rel="noreferrer" href='https://innattheedge.herokuapp.com/'>
                                    View the Deployed Application
                                </a>

                            </div>

                        </div>

                        <div className="carousel-item bg-dark">

                            <img className="d-block w-100" src={mealPlanner} alt="Second slide"></img>

                            <div className="carousel-caption bg-dark mb-5">

                                <h2 className='project-title'>The Fab Five's Fantastic Foods</h2>

                                <p className='project-description px-3'>This is a meal planner that not only helps you keep track of breakfast, lunch, and dinner. But it also let's you search for recipes to add to your schedule, and has an interactive grocery list. We also have a contact page to report any issues or ask for help.</p>

                                <a className='btn btn-dark' target='_blank' rel="noreferrer" href="https://github.com/tbsanders5/mealplanner">
                                    <i className="fab fa-github"></i>
                                    View on GitHub
                                </a>

                                <a className='btn btn-green' target='_blank' rel="noreferrer" href='https://tbsanders5.github.io/mealplanner/'>
                                    View the Deployed Application
                                </a>

                            </div>

                        </div>

                        <div className="carousel-item bg-dark">

                            <img className="d-block w-100" src={quizScreenshot} alt="Third slide"></img>

                            <div className="carousel-caption bg-dark mb-5">

                                <h2 className='project-title'>Javascript Quiz</h2>

                                <p className='project-description px-3'>This javascript quiz was created to test my own javascript skills while at the same time testing my knowledge of javascript trivia. Although I created the quiz for myself, I've made it very easy to change or add questions to the quiz. The quiz works by running you through a series of multiple choice questions while running a countdown from 75 seconds. Your overall score is based on how many seconds you have left once the quiz is completed.</p>

                                <a className='btn btn-dark' target='_blank' rel="noreferrer" href='https://github.com/NTKonzen/Javascript-Quiz'>
                                    <i className="fab fa-github"></i>
                                    View on GitHub
                                </a>

                                <a className='btn btn-green' target='_blank' rel="noreferrer" href='https://ntkonzen.github.io/Javascript-Quiz/'>
                                    View the Deployed Application
                                </a>

                            </div>

                        </div>

                        <div className="carousel-item bg-dark">

                            <img className="d-block w-100" src={trackerScreenshot} alt="Fourth slide"></img>

                            <div className="carousel-caption bg-dark mb-5">

                                <h2 className='project-title'>CLI Employee Tracker</h2>

                                <p className='project-description'>This is a command line interface program that assists the user in keeping track of their employees. I built this project to practice my skills in MySQL and Node.js, but this is an open source project that can be utilized by anyone who needs an easy way to manage their employee's. The packages I used to build this project were mysql, console.table, and inquirer.</p>

                                <a className='btn btn-dark' target='_blank' rel="noreferrer" href='https://github.com/NTKonzen/CLI-Employee-Tracker'>
                                    <i className="fab fa-github"></i>
                                    View on GitHub
                                </a>

                                <a className='btn btn-green' target='_blank' rel="noreferrer"
                                    href='https://www.youtube.com/watch?v=P8-wGqVaaqc&feature=youtu.be'>
                                    <i className="fab fa-youtube"></i>
                                    Watch the Tutorial
                                </a>

                            </div>

                        </div>

                        <div className="carousel-item bg-dark">

                            <img className="d-block w-100" src={generatorScreenshot} alt="Fifth slide"></img>

                            <div className="carousel-caption bg-dark mb-5">

                                <h2 className='project-title'>Employee Page Generator</h2>

                                <p className='project-description'>This is a simple command line application that generates a simple employee html document for any tech company all based off of user input. This includes three 'types' of employees, those being: managers, engineers, and interns. I wrote this program primarily to test my understanding of javascript classes and subclasses, but this can be used by anyone that needs a quick and easy way to build an employee page for their website! In general, this saves a lot of time as opposed to building the page from scratch. This application was built using javascript and a few Node.js packages.</p>

                                <a className='btn btn-dark' target='_blank' rel="noreferrer" href='https://github.com/NTKonzen/Employee-Page-Generator'>
                                    <i className="fab fa-github"></i>
                                    View on GitHub
                                </a>

                                <a className='btn btn-green' target='_blank' rel="noreferrer"
                                    href='https://www.youtube.com/watch?v=Rsm47FpZLDU&feature=youtu.be'>
                                    <i className="fab fa-youtube"></i>
                                    Watch the Tutorial
                                </a>

                            </div>

                        </div>

                    </div>

                    <a className="carousel-control-prev mb-5" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fas fa-arrow-circle-left text-secondary"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next mb-5" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <i className="fas fa-arrow-circle-right text-secondary"></i>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Portfolio;