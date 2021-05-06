import React from 'react'

export default function Student({learner,handleDelete}) {
    return (
        <div>
            <li>{learner.nom}    <button onClick={handleDelete.bind(this,learner.id)}>Delete</button></li>
            {/* <button onClick={handleDelete.bind(this,learner.id)}>Delete</button> */}
        </div>
    )
}
