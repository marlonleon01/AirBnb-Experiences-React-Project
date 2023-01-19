import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Card } from "./Components/Card"
import data from "./data"

export function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
                />
        ) 
    })

    return (
        <div className="all-content">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}