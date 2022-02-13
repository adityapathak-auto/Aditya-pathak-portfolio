import { useState } from "react"


export function Mode(){
    const [dark,setDark] = useState(false);
    return(<div>
    <span style={{color:"yellow"}}></span>
    <div className="switch=checkbox">
    <input type="checkbox"/>
    </div>
    <span style={{color:"grey"}}></span>
    </div>)
}