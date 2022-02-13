import { Socialdata } from "../../../data/social";
import "./social-contact.css";

export function Social(){
    const data = Socialdata
    return(<div className="social-contact">
        {data.map(item=>{
            return(<a href={item.link} target="_blank" rel="noreferrer" >
                <div className="social-icon-div" >
                    <img src={item.icon} alt="" className="social-icon" />
                </div>

            </a>)
        })}

    </div>)
}