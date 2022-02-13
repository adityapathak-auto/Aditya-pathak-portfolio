import { Social } from "../common/social-contact/social-contact";
import "./about.css";
import Typewriter from "typewriter-effect";
// const typii = (type)=>{
//     type.typeString("Web Developer").pauseFor(2000).deleteAll().typeString(" Mern Stack Developer").pauseFor(2000).deleteAll().typeString("Full Stack Developer").pauseFor(2000).deleteAll().start()
        
// }
// const typii2 = (type)=>{
//     type.typeString("Web Developer").pauseFor(2000).deleteAll().typeString(" Mern Stack Developer").pauseFor(2000).deleteAll().typeString("Full Stack Developer").callFunction().start()
        
// }
export function About(){
    return(<div className="about">
        <div className="about-top">
            <div className="about-info">
                Hello There,👋 I am<br/><span className="info-name"> Aditya Pathak</span><br/>
              <p className="typing">I am a &nbsp;</p><span className="typing"><Typewriter options={{
    strings: ['Web Developer', ' Mern Stack Developer',"Full Stack Developer"],
    autoStart: true,
    loop: true,
  }}className="typing"/></span>
  <p className="about-desc">Passionate Full Stack Web Developer with a specialization in MERN stack. Skilled, collaborative and attentive developer with a drive to develop the most relevant products. Always looking forward to learning something new to strengthen skills learned.</p>
            </div>
            <div className="about-photo">
                <img src={require("../assets/pic1.png")} alt="" className="pic1" />
            </div>
        </div>
        <div className="download">
            <a href="https://drive.google.com/file/d/17iDGuSV3lhTKbN0ffg8DmxarANeT-uED/view?usp=sharing" target="_blank"  rel="noreferrer" >Resume
            <i className="fi-rr-cloud-download download-icon"></i>
            
            </a>
            
        </div>
        
    </div>)

    
}