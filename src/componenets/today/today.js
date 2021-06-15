import React,{useState,useEffect} from 'react'
import './today.css'
import Card from '../cards/Card'
import axios from 'axios'
import {URL} from '../../constants/contant'



function Today() {
    useEffect(() => {
    
        console.log("todayyyy",URL);
        // axios().get(URL)
    }, [])
    return (
        <div>
            <div className="today-section">
            <h3 className="heading">Today :</h3>
                <Card/>
            </div>
        </div>
    )
}

export default Today
