import react from "react"
import reactDOM from "react-dom"

const Contact =()=> {
    return(
        <main className="main contact-main">
        <h2 className="contact-h2 text-capitalize">contact</h2>
        <p className="contact-text text-capitalize">contact us!</p>
        <ul className="contact-list ">
            <li className="contact-item text-uppercase ">Selling the Internet llc</li>
            <li className="contact-item">742 Evergreen Terrace</li>
            <li className="contact-item">Springfield, USA 7431</li>
            <li className="contact-item"><h3 className="contact-h2">Call us at:<a href="tel:(939)-555-0113">(939)-555-0113</a></h3></li>
            <li className="contact-item"><a href="mailto:fakemail@somemail.com">Email Us</a></li>
        </ul>
    </main>
    )
}

export default Contact