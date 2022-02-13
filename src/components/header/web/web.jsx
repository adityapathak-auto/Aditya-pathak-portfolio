import "./web.css";

export function Web(){
    return(<div className="web">
        <div className="web-option">
            <a href="#projects">
            <i className="fi fi-rr-edit-alt option-icon"></i>Projects

            </a>

        </div>
        <div className="web-option">
            <a href="#skills">
            <i className="fi fi-rr-laptop option-icon"></i>Skills
                
            </a>

        </div>
        <div className="web-option">
            <a href="#works">
            <i className="fi fi-rr-briefcase option-icon"></i>Education
                
            </a>

        </div>
        <div className="web-option">
            <a href="#contact">
            <i className="fi fi-rr-portrait option-icon"></i>Contact
                
            </a>

        </div>
        
    </div>)
}