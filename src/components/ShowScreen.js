import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import ShowBooking from './ShowBooking';
import "./showscreen.css"
export default function ShowScreen() {

    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [modal, setmodal] = useState(false);
    const [bookingList, setbookingList] = useState([])


    useEffect(() => {
        let arr = localStorage.getItem("bookingList")
        if (arr) {
            let obj = JSON.parse(arr)
            setbookingList(obj)
        }
    }, [])

    const saveDeatils = (taskObj) => {
        let tempbookingList = bookingList;
        tempbookingList.push(taskObj);
        localStorage.setItem("bookingList", JSON.stringify(tempbookingList))
        setbookingList(bookingList);
        setmodal(false)
    }


    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => setShow(data))
            .catch(error => console.log(error));
    }, [id]);

    const toggle = () => {
        setmodal(!modal);
    }

    if (!show) {
        return <div>Loading...</div>;
    }

    return (

        <div className='grid-container' >
            <h1 className='item1'>{show.name}</h1>
            <img src={show.image.original} className='item2-image' style={{ width: "100%", height: "100%" }} alt="" />
            <p className='item3'>{show.summary}</p>
            <Button className='item5' onClick={() => { setmodal(true) }}>Book Ticket</Button>
            <ShowBooking show={show} toggle={toggle} modal={modal} save={saveDeatils} />
        </div>

    )
}
