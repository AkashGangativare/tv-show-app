import {  useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ShowBooking({ show, toggle, modal, save }) {

    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [ticketQuantity, setticketQuantity] = useState('');


    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = fullName;
        taskObj["Email"] = email;
        taskObj["TicketQuantityail"] = ticketQuantity;

        save(taskObj);
    }



    return (

        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{show.name}</ModalHeader>
                <ModalBody>
                    <form >
                        <div className='form-group'>
                            <label>Name</label>
                            <input type="text" className='form-control' name='fullName' value={fullName} onChange={(e) => { setfullName(e.target.value) }} />
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type="text" className='form-control' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        </div>
                        <div className='form-group'>
                            <label>TicketQuantity</label>
                            <input type="number" className='form-control' name='ticketQuantity' value={ticketQuantity} onChange={(e) => { setticketQuantity(e.target.value) }} />

                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" onClick={handleSave}>Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal >
        </>
    )
}
