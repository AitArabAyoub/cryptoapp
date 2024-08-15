import React from 'react'
import { useState } from 'react';
import LineChart from '../LineChart/LineChart';
import { useGetCoinHistoryQuery, useGetCoinQuery } from '../api/apiSlice';
import millify from 'millify';
import Loader from '../Loader/Loader'
function CoinDetails({coinid}) {
    const [TimePeriod,setTimePeriod] = useState("3h");
    const {data,isFetching} = useGetCoinQuery({TimePeriod,coinid})
    const {data:history,isFetching : fetching} = useGetCoinHistoryQuery({coinid,TimePeriod})
    return (
        <div className='Coin w-100'>
        <div className="container p-2">
            <div className="header text-center border-bottom">
                <h1 className='text-primary'>{data?.data?.coin?.name} ({data?.data?.coin?.name}-{data?.data?.coin?.symbol}) Price</h1>
                <p className=''>{data?.data?.coin.name} live price in US(Dollar), View value statistics, market cap and supply</p>
            </div>
            <div className="body py-2">
                <select className="p-2 rounded-2 w-25 border border-primary" aria-label="Default select example" onChange={(e)=>{setTimePeriod(e.target.value)}}>
                    <option value="3h">3h</option>
                    <option value="24h">24h</option>
                    <option value="7d">7d</option>
                    <option value="30d">30d</option>
                    <option value="3m">3m</option>
                    <option value="1y">1y</option>
                    <option value="3y">3y</option>
                    <option value="5y">5y</option>
                </select>
                <div className='d-flex justify-content-between'>
                    <h3 className='text-primary'>{data?.data?.coin.name} Price Chart</h3>
                    <p>
                        <span className='fw-semibold'>Change : {data?.data?.coin.change} % </span>, 
                        <span className='fw-semibold'> Current Bitcoin Price : $ {millify(data?.data?.coin.price)} </span>
                    </p>
                </div>
                {fetching ? <Loader/> : <LineChart history = {history?.data?.history}/>}
            </div>
        </div>
    </div>
    )
}

export default CoinDetails