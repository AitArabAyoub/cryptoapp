import React from 'react'
import Exchange from '../Exchange/Exchange'
function ExchangesList({data,number}) {
    return (
        <div className='py-2 px-3'>
            <div className="container">
                <div className="row">
                    <table className='mb-3'>
                        <thead className=''>
                            <tr className='text-center'>
                            <th>Exchanges</th>
                            <th>24h btc trade volume</th>
                            <th>24h btc trade volume normalized</th>
                            <th>Trust Score</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        data?.slice(0,number).map((el,i)=>{
                            return <Exchange data={el} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ExchangesList