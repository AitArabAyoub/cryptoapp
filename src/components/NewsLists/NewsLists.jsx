import React from 'react'
import New from '../New/New'

function NewsLists({data,number}) {
  return (
    <div className='container'>
        <div className="row">
        {
            data?.slice(0,number).map((el,i)=>{
                return <New data={el} key={i}/>
            })
        }
        </div>
    </div>
  )
}

export default NewsLists