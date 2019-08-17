import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from '../components/LocationCard';

export default function LocationsList() {
    const [location, setLocation] = useState([])

     useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(response => {
                setLocation(response.data.results)
            })
            .catch(error => {
                console.log(error)
            });
    }, [])
    return <section className='location-list grid-view'>

         <h2>{location.map(e => <LCard data={e} />)}</h2>
    </section>
}
