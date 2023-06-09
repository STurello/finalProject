import react from "react"
import Card from "./Card"
import { useParams } from "react-router-dom"



const AllProducts =(props)=> {

    const products = props.products
    const productComponent = products.map(item => {
        return (
            <Card key={item.website_id} id={item.website_id} website={item.website} image={item.image} homepage={item.homepage} price={item.price} cEst={item.company_est_date} wEst={item.website_est_date} founder={item.founder} owner={item.owner} />
        )
    })
    return (
        <main className="main main-products">
            <section className="container">
                <h1>AllProducts page</h1>
                <div className="row">
                    {productComponent}
                </div>
            </section>
        </main>
    )

}

export default AllProducts