import { Educationdata } from "../../data/eduction";
import { Seperator } from "../common/seperator/seperator";
import { Workcard } from "./work-card";
import "./work.css";

export function Work(){
    const data = Educationdata;
    return(<div className="work">
        <Seperator/>
        <label className="section-title">Education</label>
        <div className="work-list">
            {data.map(item=>{
                return (
                    <Workcard item={item}/>
                )
            })}
        </div>


    </div>)
}