import React from 'react'

export const Card = (props) => {
    return (
        <div className="p-3 rounded mt-2">
            <img src={props.image} width="100%" alt="" />
            <div className="p-3">
                <p>{props.description}</p>
                <h5>{props.price}</h5>
            </div>
        </div>
    )
}
