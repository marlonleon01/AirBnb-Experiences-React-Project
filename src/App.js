import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Card } from "./Components/Card"
import data from "./data"

export function App() {
    const info = data.map(data => {
        return <Card 
                img={data.coverImg}
                rating={data.stats.rating}
                reviewCount={data.stats.reviewCount}
                location={data.location}
                title={data.title}
                price={data.price}
                />
    })

    return (
        <div className="all-content">
            <Navbar />
            <Hero />
            {info}
        </div>
    )
}