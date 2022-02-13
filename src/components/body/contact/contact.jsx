import { Seperator } from "../common/seperator/seperator";
import { Social } from "../common/social-contact/social-contact";
import "./contact.css";

export function Contact(){
    return(<div className="contact">
        <Seperator/>
        <label className="section-title">Contact</label>
        <div className="contact-container">
            <div className="contact-left">
                <p>Want to get in Touch?Contact me on any of the platforms</p>
                <Social/>
            </div>
            <div className="contact-right"></div>
        </div>
    </div>)
}