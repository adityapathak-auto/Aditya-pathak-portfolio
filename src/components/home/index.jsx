import { Body } from "../body/body";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./home.css";

export function Home(){
    return (<div className="home">
        <div>
            <Header/>
        </div>
        <div>
            <Body/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>)
}