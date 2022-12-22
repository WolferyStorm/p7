import { useState } from "react"

export default function Collapse(props){
    const [open, setisOpen] = useState(false)
    const handleClick = () => {
        setisOpen(!open)
    }
    const chevron = open ? <i className="fa-sharp fa-solid fa-chevron-up" ></i> : <i className="fa-sharp fa-solid fa-chevron-down" ></i>
    const collapseBody = open && (<div className="collapse_body">{props.aboutText}</div>)
    return (
        <div onClick ={()=>handleClick()} className="collapse">
        <div className="collapse_header" >
            {props.aboutTitle}
            {chevron}
        </div>
        {collapseBody}
        </div>
    )
}