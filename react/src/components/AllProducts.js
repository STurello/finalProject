import react from "react"
import reactDOM from "react-dom"
import { useParams } from "react-router-dom"
import { getCompanies, getCompany } from "../data"


const AllProducts =()=> {

    // useEffect(()=> {
    //     const url = `http://localhost:3000/website`
    // },[])

    let company = getCompanies(parseInt(useParams.company, 10))

    const cards = company.map(item => {
        return (
            <main>

            <cards 
                img={item.logo}
                company={item.company}
                cFounded={item.cFounded}
                wFounded={item.wFounded}
                />
            <h1>AllProducts page</h1>
            </main>
        )
    })

    // let company = getCompany
    // const cards = data.map(company => {
    //     return (
    //         <cards
    //             // img={company.logo}
    //             company={company.company}
    //             cFounded={company.cFounded}
    //             wFounded={company.wFounded}
    //         />
    //     )
    // })
}

export default AllProducts