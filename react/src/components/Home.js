import react from "react"
import reactDOM from "react-dom"
import Card from "./Card"

const Home =(props)=> {
    console.log(props)
    const products = props.products
    console.log(typeof(products))
    const topThree = products.filter(product => product.website_id <= 3)
    
    const topThreeCards = topThree.map(item => {
        return (
            <Card key={item.website_id} id={item.website_id} website={item.website} image={item.image} homepage={item.homepage} price={item.price} />
        )
    })
    return(
        <main className="main home-main">
            <section className="container">
                <h1>Home.js</h1>
                <div className="row">
                    {topThreeCards}
                </div>
            </section>
        </main>
    )
}

export default Home