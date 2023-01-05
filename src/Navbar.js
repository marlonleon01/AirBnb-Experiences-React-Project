import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAirbnb} from "@fortawesome/free-brands-svg-icons"

export function Navbar() {
    return (
        <nav className="navbar">
            <FontAwesomeIcon icon={faAirbnb} className="airbnb-icon"></FontAwesomeIcon>
            <h1 className="airbnb-title">Airbnb</h1>
        </nav>
    )
}