import { Skillsdata } from "../../data/skills";
import { Seperator } from "../common/seperator/seperator";
import { Skillcard } from "./skill-card";
import "./skills.css";

export function Skills(){
    const data = Skillsdata;
    return(<div className="skills">
        <Seperator/>
        <label className="section-title">Skills</label>
        <div className="skills-container">
            {data.map(skills=>{
                return(<div className="skills-section">
                    <label className="skills-section-title">{skills.type}</label>
                    <div className="skills-list">
                        {skills.list.map(skill=>{
                            return(
                                <Skillcard skill={skill}/>
                            )
                        })}
                    </div>

                </div>)
            })}

        </div>
    </div>)
}