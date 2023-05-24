import { SunIcon } from "@heroicons/react/20/solid";
import Project from "../../components/project/Project";

function Dashboard() {
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
            <section className="section">
                <div className="container is-fluid">
                    <h1 className="title has-text-centered">
                        <SunIcon className="icon" /> Good morning! Here's an
                        overview:
                    </h1>
                    <div className="columns">
                        <div className="column is-five-sixths">
                            <div className="box" style={{ flexGrow: 1 }}>
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
                    <div className="columns">
                        <div className="column">
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
