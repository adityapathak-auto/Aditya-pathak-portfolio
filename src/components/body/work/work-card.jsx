import "./work-card.css";

export function Workcard({item}){
    return(<div className="work-card">
        <img src={item.logo} alt="" className="work-logo" />
        <div className="work-info">
            <label className="company-name">{item.company}</label>
            <div>
                <label className="work-dates">{item.date}</label>
            </div>
            <div className="work-desc">
                <p>{item.designation}</p>
            </div>
        </div>

    </div>)
}