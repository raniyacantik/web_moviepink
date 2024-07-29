import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({ data, trending, index, media_type }) => {
    const imageURL = useSelector(state => state.movieoData.imageURL)

    const mediaType = data.media_type ?? media_type
    return (
        <Link 
            to={"/" + mediaType + "/" + data.id} 
            className='relative w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out'
        >
            {
                data?.poster_path ? (
                    <img
                        src={imageURL + data?.poster_path}
                        alt={data?.title || data?.name}
                        className='w-full h-full object-cover'
                    />
                ) : (
                    <div className='bg-neutral-800 h-full w-full flex justify-center items-center text-white text-lg'>
                       Tidak ada gambar
                    </div>
                )
            }

            <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent'></div>

            {
                trending && (
                    <div className='absolute top-4 left-0 bg-pink-700 text-white text-sm py-1 px-4 rounded-r-full shadow-lg'>
                        #{index} Sedang tren
                    </div>
                )
            }

            <div className='absolute bottom-0 w-full p-3 bg-gradient-to-t from-black via-transparent to-transparent'>
                <h2 className='text-white text-lg font-bold truncate'>{data?.title || data?.name}</h2>
                <div className='flex justify-between items-center text-sm text-neutral-300 mt-1'>
                    <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
                    <p className='bg-black bg-opacity-70 px-2 py-1 rounded-full text-xs text-white'>Peringkat: {Number(data.vote_average).toFixed(1)}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card
