import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getCompanies } from "../data"

const Single =()=> {

    let company = getCompanies
    return(
        <main className="main main-products">
            {/* <h1>company: {company.company}</h1>
            
        <section style={{padding: '1rem'}}>
            <h2>: {company.id} </h2>
            <p>{company.homepage}: {company.company} </p>
        </section> */}

        <div className="card">
            <img src={company.logo} />
            <p>{company.name} </p>
            <p><a href="{company.homepage}">{company.homepage} </a> </p>
        </div>
        </main>
    )
}

export default Single