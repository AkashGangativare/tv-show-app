import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


export default function ShowItem({ show, summary, image, id }) {
    return (
        <div className='my-3'>
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{show}  </h5>
                    <p className="card-text">{summary}</p>
                    <Link to={`/show/${id}`}> <Button outline color="primary">View Details</Button>{''}</Link>
                </div>
            </div>
        </div>
    )
}
