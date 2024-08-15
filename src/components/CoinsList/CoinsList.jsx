import React from 'react'
import Coin from '../Coin/Coin'
import Loader from '../Loader/Loader'
function CoinsList({data}) {
    return (
        <div className='row'>
            {
                data?.map((coin,i)=>{
                    return <Coin coin={coin} key={i}/>
                })
            }
        </div>
    )
}
export default CoinsList