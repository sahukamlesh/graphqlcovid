import React from 'react'
import { useLazyQuery } from '@apollo/client';
import { GET_COVID_DATA } from '../graphql/Query';
import { useState } from 'react';
import Navbar from '../Component/Navbar';
import Jumbotron from '../Component/Jumbotron';
import Table from '../Component/Table';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from '../Component/Card';

ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
    const { getCode, getName } = require('country-list');
    // console.log(getCode(countrySearched));
    const [countrySearched, setCountrySearched] = useState("")
    const [getCovidData, { data, error }] = useLazyQuery(GET_COVID_DATA, {
        variables: { code: getCode(countrySearched) }
    })

    if (error) return <h1>error found </h1>
    if (data) {
        console.log(data)

        console.log(data.country.name)
        // console.log(data.country.latest.confirmed)
        const confirmed = data.country.latest.confirmed
        console.log(confirmed)
        // console.log(data.country.latest.deceased)
        const deceased = data.country.latest.deceased
        console.log(deceased)
        console.log(data.country.latest.lastUpdated)

    }
    const data1 = {
        labels: ['Confirmed', 'Deceased', 'Recovered',],
        datasets: [
            {
                label: '# of Votes',
                data: [36717927, 485035, 0,],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };



    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className='App' >
                <h2 className='my-3'>Search Covid Stats </h2>

                <input className='mx-3' type="text" placeholder='country code ...' onChange={(event) => {
                    setCountrySearched(event.target.value)
                }} />
                <button className="btn btn-light" onClick={() => getCovidData()}>Search</button>
                <br />
                {data && <>

                    <div>
                        <h2>
                            <button type="button" class="btn btn-danger btn-lg my-4">Country : {data.country.name}</button></h2>

                        <button type="button" class="btn btn-warning btn-block btn-lg mx-3">Confirmed Cases <span class="badge badge-light">{data.country.latest.confirmed} </span></button>
                        <button type="button" class="btn btn-success btn-lg">Deceased : <span class="badge badge-light">{data.country.latest.deceased}</span></button>
                        <button type="button" class="btn btn-info btn-lg mx-3">Recovered : <span class="badge badge-light">0</span></button>
                        <button type="button" class="btn btn-primary btn-lg mx-3 p-2 my-3">LastUpdated : <span class="badge badge-light">{data.country.latest.lastUpdated}</span></button>
                        {/* <h2>LastUpdated : {data.country.latest.lastUpdated}</h2>  */}
                        <div><Pie data={data1} width={"40%"}
                            options={{ maintainAspectRatio: false }} /></div>

                    </div>


                </>
                }

                <Table />
                <Card/>
            </div>

        </div>
    )
}

export default Home
