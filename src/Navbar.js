import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAirbnb} from "@fortawesome/free-brands-svg-icons"

export function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="airbnb-title">
                <FontAwesomeIcon icon={faAirbnb} className="airbnb-icon"></FontAwesomeIcon>Airbnb
            </h1>
        </nav>
    )
}