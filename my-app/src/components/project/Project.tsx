import { ArrowRightIcon } from "@heroicons/react/20/solid";
function Project({
    title = "Project Title",
    company = "Company Name",
    description = "Project Description",
}) {
    return (
        <div className="box">
            <div className="columns">
                <div className="column is-three-quarters">
                    <h1 className="title is-4">{title}</h1>
                    <h2 className="subtitle is-6">{company}</h2>
                    <p>{description}</p>
                </div>
                <div className="column has-text-right">
                    <button className="button is-link">
                        Go to project <ArrowRightIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Project;
