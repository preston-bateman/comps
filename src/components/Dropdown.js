import { useState } from "react"
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel"

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)

    

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
        </div>
    })

    return (
    <div className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={() => handleClick(isOpen)}>
            {value?.label || 'Select...'}
            <GoChevronDown />
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>)
}


export default Dropdown