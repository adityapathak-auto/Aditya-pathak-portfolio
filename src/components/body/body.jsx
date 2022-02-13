import { About } from "./about/about";
import "./body.css";
import { Contact } from "./contact/contact";
import { Projects } from "./projects/projects";
import { Skills } from "./skills/skills";
import { Work } from "./work/work";

export function Body(){
    return(<div className="body">
       <section id="about">
           <About/>
       </section>
       <section id="projects">
           <Projects/>
       </section>
       <section id="skills">
           <Skills/>
       </section>
       <section id="works">
           <Work/>

       </section>
       <section id="contact">
           <Contact/>
       </section>
    </div>)
}