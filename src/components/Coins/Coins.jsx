import React from 'react'
import { useGetCoinsQuery } from '../api/apiSlice'
import Loader from '../Loader/Loader'
import CoinsList from '../CoinsList/CoinsList'
import { useParams } from 'react-router-dom'
import CoinDetails from '../CoinDetails/CoinDetails'
function Coins() {
  const {coinId} = useParams()
  const {data,isFetching} = useGetCoinsQuery(50)
  return (
    <div className='coins'>
      <div className="container">
        {isFetching ? <Loader/> : coinId ? <CoinDetails coinid = {coinId}/> : <CoinsList data={data?.data?.coins}/>}
      </div>
    </div>
  )
}

export default Coins