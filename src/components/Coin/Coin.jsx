import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
function Coin({coin}) {
    return (
        <div className='col-3 p-2'>
            <Link to={`/coins/${coin.uuid}`} className='text-decoration-none'>
                <div className="card bg-white">
                    <div className="card-header bg-white border-bottom d-flex justify-content-between">
                        <h6>{coin.rank}.{coin.name}</h6>
                        <img src={coin.iconUrl} alt="" width={"32px"} height={"32px"}/>
                    </div>
                    <div className="card-body">
                        <h6>Price : {millify(Number(coin.price))}$ </h6>
                        <h6>Market Cap : {millify(Number(coin.marketCap))} </h6>
                        <h6>Daily Change : {millify(coin.change)}% </h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Coin