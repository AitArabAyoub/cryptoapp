import React from 'react'
import Loader from '../Loader/Loader'
import millify from 'millify'
function Stats({data,fetching}) {
    return (
        <>
            <h2>Global Crypto Stats</h2>
            <div className="row">
                <div className="col-6">
                    <div>
                        <h6 className='text-secondary'>Total Crytocurrencies</h6>
                        <p>{millify(Number(data?.total))}</p>
                    </div>
                    <div>
                        <h6 className='text-secondary'>Total Market Cap</h6>
                        <p>{millify(Number(data?.totalMarketCap))}</p>
                    </div>
                    <div>
                        <h6 className='text-secondary'>Total Crytocurrencies</h6>
                        <p>{millify(Number(data?.total))}</p>
                    </div>
                </div>
                <div className="col-6">
                    <div>
                        <h6 className='text-secondary'>Total Exchanges</h6>
                        <p>{millify(Number(data?.totalExchanges))}</p>
                    </div>
                    <div>
                        <h6 className='text-secondary'>Total 24H Volume</h6>
                        <p>{millify(Number(data?.total24hVolume))}</p>
                    </div>
                    <div>
                        <h6 className='text-secondary'>Total Markets</h6>
                        <p>{millify(Number(data?.totalMarkets))}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats