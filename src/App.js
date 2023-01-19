import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Card } from "./Components/Card"
import Katie from "./imgs/Katie Zaferes.png"

export function App() {
    return (
        <div className="all-content">
            <Navbar />
            <Hero />
            <Card 
                img={Katie}
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}