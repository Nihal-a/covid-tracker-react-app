import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './total.css'


function Total() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all').then((response)=>{
            console.log("daaataa : ",response.data);
            setData(response.data)
        })
    }, [])
    return (
        <div className='total-section'>
            <h3 className="heading">Total :</h3>
            <div className="card-container">
                    <div className="cards-area">
                        <h4 className="subheading">Confirmed</h4>
                        <div className="card">
                            <h5 className="numbers">{data ? data.cases : '0'}</h5>
                        </div>
                    </div>
                    <div className="cards-area">
                        <h4 className="subheading">Recovered</h4>
                        <div className="card">
                            <h5 className="numbers">{data ? data.recovered : '0'}</h5>
                        </div>
                    </div>
                    <div className="cards-area">
                        <h4 className="subheading">Deaths</h4>
                        <div className="card">
                            <h5 className="numbers">{data ? data.deaths : '0'}</h5>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Total
