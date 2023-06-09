import React from "react";
import { Link, Outlet } from "react-router-dom";

const Card =(props)=> {
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <div className="card-header">
                    <Link to={`/products/website/${props.id}`} key={props.id} > <h2>{props.website}</h2> </Link>
                </div>
                <img src={`/media/${props.image}`} alt={props.homepage} className="img-fluid card-img rounded" />
                <div className="card-body">
                    <p className="card-text">{props.homepage}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Card