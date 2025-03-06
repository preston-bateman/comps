import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

function ModalPage(){
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => { 
        setShowModal(false)
     }

    const handleClick = (first) => { 
        setShowModal(true)
    }

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>I Accept</Button>
        </div>
    )

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            This is where you put the text of your modal...
        </p>
    </Modal>

    return(
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage