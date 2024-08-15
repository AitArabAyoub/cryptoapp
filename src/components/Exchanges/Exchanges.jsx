import React from 'react'
import { useGetExchangesQuery } from '../api/newsSlice'
import Loader from '../Loader/Loader'
import ExchangesList from '../ExchangesList/ExchangesList'
function Exchanges() {
  const {data,isFetching} = useGetExchangesQuery()
  return (
    <div className='exchanges'>
      {isFetching ? <Loader/> : <ExchangesList data={data} number={10}/>}
    </div>
  )
}

export default Exchanges