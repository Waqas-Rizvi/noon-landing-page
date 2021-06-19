import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai';


export const Foot1 = () => {
    return (
        <div className="p-3">
            <ul style={{listStyle: "none", display: "flex", justifyContent: "space-between"}}>
                <li><h5>We're Always Here To Help</h5><span style={{fontSize: "14px"}}>Reach out to us through any of these support channels</span></li>
                <li>
                    <a href="#" style={{textDecorationLine: "none", color: "black"}}>
                    <span style={{fontSize: "14px"}}><AiOutlineExclamationCircle/>HELP CENTER</span><h5>help.noon.com</h5>
                    </a>
                </li>
            </ul>
        </div>
    )
}

