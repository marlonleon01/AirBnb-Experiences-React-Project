import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Card } from "./Components/Card"

export function App() {
    return (
        <div className="all-content">
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}