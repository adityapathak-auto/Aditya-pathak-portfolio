import "./project-card.css";

export function Projectcard({project}){

    return(<div className="project-card">
        <div className="project-info">
            <label className="project-title">{project.title}</label>
            <div className="project-links">
                <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
                    <div className="link-button">
                    <i class="fi fi-rr-globe"></i>Demo
                    </div>
                </a>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer"  >
                    <div className="link-button">
                    <i class="devicon-github-original colored"></i>Github
                    </div>
                </a>
            </div>
            <p>{project.about}</p>
            <div className="project-tags">
                {project.tags.map(tag=>{
                    return (<label className="tag">{tag}</label>)
                })}
            </div>
        </div>
        <img src={project.image} className="project-photo" alt="" />

    </div>)
}