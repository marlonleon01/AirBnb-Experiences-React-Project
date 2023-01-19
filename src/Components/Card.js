export function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.img} className="card-img"></img>
            <div className="card-info">
                <img src="imgs/Star.png" className="card-star"></img>
                <span className="card-rating">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">{props.price}</span> / person</p>
        </div>
    )
}