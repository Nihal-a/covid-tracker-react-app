import React,{useEffect, useState} from 'react'
import './today.css'
import axios from 'axios'


function Today() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://disease.sh/v3/covid-19/all').then((response)=>{
            console.log("daaataa : ",response.data);
            setData(response.data)
        })
    }, [])
    return (
        <div>
            <div className="today-section">
            <h3 className="heading">Today :</h3>
                <div className="card-container">
                    <div className="cards-area">
                        <h4 className="subheading">Confirmed</h4>
                        <div className="card">
                            <h5 className="numbers">{data ? data.todayCases : '0'}</h5>
                        </div>
                    </div>
                    <div className="cards-area">
                        <h4 className="subheading">Recovered</h4>
                        <div className="card">
                            <h5 className="numbers">{data ? data.todayDeaths : '0'}</h5>
                        </div>
                    </div>
                    <div className="cards-area">
                        <h4 className="subheading">Deaths</h4>
                        <div className="card">
                            <h5 className="numbers">{data ? data.todayRecovered : '0'}</h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Today
