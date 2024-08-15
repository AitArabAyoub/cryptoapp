import React from 'react'
import { useGetCoinsQuery } from '../api/apiSlice'
import { useGetNewsQuery } from '../api/newsSlice'
import Stats from '../Stats/Stats'
import CoinsList from '../CoinsList/CoinsList'
import NewsLists from '../NewsLists/NewsLists'
import Loader from '../Loader/Loader'
function Home() {
  const {data,isFetching} = useGetCoinsQuery(10)
  const {data:news , isFetching : fetching} = useGetNewsQuery()
  return (
    <div className='home'>
      <div className='container'>
        {isFetching ? <Loader/> : <Stats data={data?.data?.stats}/>}
        <h2>Top 10 Cryptos in The World</h2>
        {isFetching ? <Loader/> : <CoinsList data={data?.data?.coins}/>}
        <h2>Latest Crypto News</h2>
        {fetching ? <Loader/> : <NewsLists data={news?.data} fetching = {fetching} number={8}/>}
      </div>
    </div>
  )
}

export default Home