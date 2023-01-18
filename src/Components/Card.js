import Katie from "../imgs/Katie Zaferes.png"
import Star from "../imgs/Star.png"

export function Card() {
    return (
        <div>
            <img src={Katie} className="katie"></img>
            <div>
                <img src={Star} className="star"></img>
                <span className="card-rating">5.0 (6)•USA</span>
                <h2 className="card-title">Life lessons with Katie Zaferes</h2>
                <p className="card-price"><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}