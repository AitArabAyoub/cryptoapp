import React from 'react'
import { useGetNewsQuery } from '../api/newsSlice'
import Loader from '../Loader/Loader'
import NewsLists from '../NewsLists/NewsLists'
function News() {
  const {data,isFetching} = useGetNewsQuery()
  return (
    <div className='news'>
      <div className="container">
        {isFetching ? <Loader/> : <NewsLists data={data?.data}/>}
      </div>
    </div>
  )
}

export default News