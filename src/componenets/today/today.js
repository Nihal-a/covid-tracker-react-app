import React from 'react'
import './today.css'
import Card from '../cards/card'
function today() {
    return (
        <div>
            <div className="today-section">
            <h3 className="heading">Today :</h3>
                <Card/>
            </div>
        </div>
    )
}

export default today
