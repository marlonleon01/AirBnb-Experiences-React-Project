import Star from "../imgs/Star.png"

export function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img"></img>
            <div className="card-info">
                <img src={Star} className="card-star"></img>
                <span className="card-rating">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
                <p className="card-title">{props.title}</p>
                <p className="card-price"><span className="bold">{props.price}</span> / person</p>
        </div>
    )
}