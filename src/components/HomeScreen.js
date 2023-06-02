import React, { useEffect, useState } from 'react';
import ShowItem from './ShowItem';
export default function HomeScreen() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setShows(data))
            .catch(error => console.log(error));
    }, []);
    return (
        <div className="container">
            <div className="row">
                <h1 className='text-center mt-4'>TV Shows</h1>
                {shows.map(show => (
                    <div className="col-md-4" key={show.show.id}>
                        <ShowItem show={show.show.name} id={show.show.id} summary={show.show.summary ? show.show.summary.slice(0, 100) : ""} image={show.show.image.original} />
                    </div>
                ))}
            </div>

        </div>
    )
}
