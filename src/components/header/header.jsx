import { useState } from "react";
import "./header.css";
import { Mobile } from "./mobile/mobile";
import { Web } from "./web/web";

export function Header(){
    const [isOpen,setIsOpen] = useState(false);
    // const [dark,setDark] = useState(false);
    return(<div className="header">
        <div className="leftLogo">Portfoilo
        
        </div>
        <div className="menu">
            <div className="web-menu">
                <Web/>
            </div>
            <div className="cont">
                
            </div>
            <div className="mobile-menu">
                <div onClick={()=>{
                    setIsOpen(!isOpen);
                }}>
                <i className="fi fi-rr-apps menu-icons"></i>
                </div>
                {isOpen&& <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
        
    </div>)
}