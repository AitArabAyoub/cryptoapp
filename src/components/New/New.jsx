import React from 'react'
import { Link } from 'react-router-dom'

function New({data}) {
    return (
        <div className='col-3 p-2'>
        <Link to={`${data.url}`} className='text-decoration-none'>
            <div className="card bg-white">
                <div className="card-header bg-white border-bottom d-flex justify-content-between">
                    <h6 className='text1'>{data.title}</h6>
                    <img src={data.thumb_2x} alt="" width={"60px"}/>
                </div>
                <div className="card-body">
                    <p className='text1'>{data.description}</p>
                    <h6>updated at: {Date(data.updated_at * 60).slice(0,24)}</h6>
                </div>
                <div className="card-footer bg-white">
                    <h6>{data.news_site}</h6>
                </div>
            </div>
        </Link>
    </div>
    )
}

export default New