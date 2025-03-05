import Modal from "../components/Modal"
import Button from "../components/Button"
import { useState } from "react"

function ModalPage(){
    const [showModal, setShowModal] = useState(false)

    const handleClick = (first) => { 
        setShowModal(true)
    }

    return(
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && <Modal />}
        </div>
    )
}

export default ModalPage