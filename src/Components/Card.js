import Katie from "../imgs/Katie Zaferes.png"
import Star from "../imgs/Star.png"

export function Card() {
    return (
        <div className="card">
            <img src={Katie} className="card-img"></img>
            <div className="card-info">
                <img src={Star} className="card-star"></img>
                <span className="card-rating">5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
                <p className="card-title">Life lessons with Katie Zaferes</p>
                <p className="card-price"><strong>From $136</strong> / person</p>
        </div>
    )
}