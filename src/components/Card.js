import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({data,trending,index,media_type }) => {
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const mediaType = data.media_type ?? media_type

    return (
        <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded-lg relative shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
            {
                data?.poster_path ? (
                    <img
                        src={imageURL+data?.poster_path}
                        alt={data?.title || data?.name}
                        className='w-full h-full object-cover rounded-lg'
                    />
                ) : (
                    <div className='bg-neutral-800 h-full w-full flex justify-center items-center text-white text-lg font-semibold'>
                        No Image Found
                    </div>
                )
            }

            <div className='absolute top-4 left-0'>
                {
                    trending && (
                        <div className='py-1 px-4 backdrop-blur-xl rounded-r-full bg-pink-900 text-white shadow-md'>
                            #{index} Trending 
                        </div>
                    )
                }
            </div>

            <div className='absolute bottom-0 w-full h-20 backdrop-blur-xl bg-gradient-to-t from-pink-900 via-pink-800 to-transparent p-3 rounded-b-lg'>
                <h2 className='text-white text-lg font-semibold truncate'>{data?.title || data?.name}</h2>
                <div className='text-sm text-neutral-300 flex justify-between items-center mt-1'>
                    <p>{ moment(data.release_date).format("MMMM Do YYYY") }</p>
                    <p className='bg-black px-2 py-1 rounded-full text-xs text-white shadow-sm'>Rating: {Number(data.vote_average).toFixed(1)}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
