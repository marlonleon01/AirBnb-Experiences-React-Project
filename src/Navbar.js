import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAirbnb} from "@fortawesome/free-brands-svg-icons"

export function Navbar() {
    return (
        <nav>
            <h1>
                <FontAwesomeIcon icon={faAirbnb}></FontAwesomeIcon>Airbnb
            </h1>
        </nav>
    )
}