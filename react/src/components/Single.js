import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Single =()=> {
    const [product, setProduct] = useState({})
    const params = useParams()
    const url = `http://localhost:3000/api/website/${params.id}`
    
    useEffect(()=> {
        axios.get(url).then(res => setProduct(res.data))
    }, [])
    console.log(product)

    return (
        <main className="main ">
            <section className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img src={`/media/${product.image}`} alt={product.homepage} className="img-fluid card-img rounded" />

                    </div>
                    <div className="col-md-5">
                        <ul>
                            <li>{product.website}</li>
                            <li>{product.homepage}</li>
                            <li>Company Founded: {product.company_est_date}</li>
                            <li>Website Launched: {product.website_est_date}</li>
                            <li>Price: {product.price}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Single