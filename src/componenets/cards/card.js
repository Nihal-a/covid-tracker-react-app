import React from 'react'
import './card.css'

function card() {
    return (
        <div>
           
                <div className="card-container">
                    <div className="cards-area">
                        <h4 className="subheading">Confirmed</h4>
                        <div className="card">
                            <h5 className="numbers">177086088</h5>
                        </div>
                    </div>
                    <div className="cards-area">
                        <h4 className="subheading">Recovered</h4>
                        <div className="card">
                            <h5 className="numbers">161294735</h5>
                        </div>
                    </div>
                    <div className="cards-area">
                        <h4 className="subheading">Deaths</h4>
                        <div className="card">
                            <h5 className="numbers">161294735</h5>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default card
