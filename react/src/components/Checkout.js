import react from "react"
import reactDOM from "react-dom"

const Checkout =()=> {
    return(
        <main className="main checkout-main">
        <section className="section section-checkout">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="checkout-header text-capitalize">checkout</h2>
                        <p className="checkout-text">Make all selections and pay</p>
                    </div>
                    <div className="col">
                        <p className="checkout-item-count">
                            <span id="checkoutItemCount"></span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table" id="table">
                            <tr className="table-headers">
                                <td>website name</td>
                                <td>site price</td>
                                <td>subtotal</td>
                            </tr>
                            <tbody id="tbody"></tbody>
                            <tr className="totals" id="totals">
                                <td colspan="3">
                                    <p className="total-subtotal" id="totalSubtotal">Subtotal:</p>
                                    <p className="total-tax" id="totalTax">Tax:</p>
                                    <p className="total-total" id="totalTotal">Total:</p>
                                </td>
                                <td className="total-values">
                                    <p className="subtotal-value" id="subtotalValue">$<span id="subValue"></span></p>
                                    <p className="tax-value">$<span id="taxValue"></span></p>
                                    <p className="total-value">$<span id="totalValue"></span> </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Checkout