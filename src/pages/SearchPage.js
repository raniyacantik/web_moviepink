import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const SearchPage = () => {
  const location = useLocation()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const query = location?.search?.slice(3)

  const fetchData = async () => {
    try {
      const response = await axios.get(`search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page
        }
      })
      setData((prev) => [
        ...prev,
        ...response.data.results
      ])
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    if (query) {
      setPage(1)
      setData([])
      fetchData()
    }
  }, [location?.search])

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    if (query) {
      fetchData()
    }
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='py-16 bg-neutral-900 min-h-screen'>
      <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-30'>
        <input
          type='text'
          placeholder='Cari di sini...'
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
          className='px-4 py-2 text-lg w-full bg-neutral-800 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out'
        />
      </div>
      <div className='container mx-auto px-4'>
        <h3 className='capitalize text-2xl font-semibold text-white mb-4'>
          Hasil Pencarian
        </h3>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6'>
          {
            data.map((searchData) => (
              <Card data={searchData} key={searchData.id + "search"} media_type={searchData.media_type} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage
