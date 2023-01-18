import airbnbPhoto from "../imgs/Airbnb hero photo.png"

export function Hero() {
    return (
        <div className="middle-section">
            <img src={airbnbPhoto} className="airbnb-photo"></img>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-paragraph">
                Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.
            </p>
        </div>
    )
}