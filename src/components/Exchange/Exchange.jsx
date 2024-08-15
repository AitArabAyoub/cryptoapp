import React from 'react'
import millify from 'millify'
function Exchange({data,i}) {
    return (
        <div className="col-12" key={i}>
        <div className="card p-0">
            <div className="card-header d-flex justify-content-between py-3 text-center" data-bs-toggle="collapse" data-bs-target={"#" + data.id}>
                <p className='m-0 w-25 text-start'>{data.name}</p>
                <p className='m-0  w-25 text-start'>{millify(data.trade_volume_24h_btc)}</p>
                <p className='m-0  w-25 text-center'>{millify(data.trade_volume_24h_btc_normalized)}</p>
                <p className='m-0  w-25 text-end'>{data.trust_score}</p>
            </div>
            <div className="collapse" id={data.id}>
                <div className="card card-body">
                {/* {el.description}
                for mor information check the website below */}
                {
                    data.description === "" ? <p>{data.name} is cryptocurrency exchange and digital currency portfolio management platform,founded in {data.year_established} in {data.country}</p> : <p>{data.description}</p>
                } 
                </div>
            </div>
            </div>
        </div>
    )
}

export default Exchange