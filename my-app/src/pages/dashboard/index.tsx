import { SunIcon } from "@heroicons/react/20/solid";
import Project from "../../components/project/Project";

function Dashboard() {
    const menuOptions = ["Home", "Problems", "Collaborations", "Marketplace"];
    const projects = [
        {
            title: "Project 1",
            company: "Company A",
            description: "Description for Project 1",
        },
        {
            title: "Project 2",
            company: "Company B",
            description: "Description for Project 2",
        },
        {
            title: "Project 3",
            company: "Company C",
            description: "Description for Project 3",
        },
    ];

    return (
        <div>
            <nav
                className="navbar is-transparent"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            width="112"
                            height="28"
                        />
                    </a>

                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>

                        <a className="navbar-item">Documentation</a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">More</a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">About</a>
                                <a className="navbar-item">Jobs</a>
                                <a className="navbar-item">Contact</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">Report an issue</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">
                        <SunIcon className="h-5 w-5 inline-block" /> Good
                        morning! Here's an overview:
                    </h1>
                    <div className="columns is-vcentered">
                        <div className="column is-five-sixths">
                            <div className="box">
                                Complete your business setup
                            </div>
                        </div>
                        <div className="column">
                            <div className="box has-background-black">
                                <h2 className="title is-4 has-text-white">
                                    Management Tools
                                </h2>
                                {/* Add examples */}
                                <h2 className="title is-4 has-text-white">
                                    Service Tools
                                </h2>
                                {/* Add examples */}
                            </div>
                        </div>
                    </div>
                    <div className="columns is-vcentered">
                        <div className="column is-four-fifths">
                            <div className="box">
                                <h2 className="title is-4">Ongoing Projects</h2>
                                {projects.map((project) => (
                                    <Project
                                        key={project.title}
                                        title={project.title}
                                        company={project.company}
                                        description={project.description}
                                    />
                                ))}
                            </div>
                            <div className="box">
                                <h2 className="title is-4">Bids Placed</h2>
                                {projects.map((project) => (
                                    <Project
                                        key={project.title}
                                        title={project.title}
                                        company={project.company}
                                        description={project.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
