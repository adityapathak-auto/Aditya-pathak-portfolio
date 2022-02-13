import { Projectdata } from "../../data/projects";
import { Seperator } from "../common/seperator/seperator";
import { Projectcard } from "./project-card";
import "./projects.css";

export function Projects(){
    const data = Projectdata;
    return(<div className="projects">
        <Seperator/>
        <label className="section-title">Projects</label>
        <div>
            {data.map(project=>{
                return <Projectcard project={project}/>
            })}
        </div>
    </div>)
}