import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieoData.bannerData);
    const imageURL = useSelector(state => state.movieoData.imageURL);
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage(prev => prev - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage < bannerData.length - 1) {
                handleNext();
            } else {
                setCurrentImage(0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage, bannerData.length]);

    return (
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden relative'>
                <div className='flex transition-transform duration-1000 ease-in-out' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {bannerData.map((data, index) => (
                        <div key={data.id + "bannerHome" + index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative'>
                            <div className='w-full h-full'>
                                <img
                                    src={imageURL + data.backdrop_path}
                                    className='h-full w-full object-cover'
                                    alt={data.title || data.name}
                                />
                            </div>

                            <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:flex'>
                                <button onClick={handlePrevious} className='bg-gray-800 p-2 rounded-full text-xl text-white shadow-md'>
                                    <FaAngleLeft />
                                </button>
                                <button onClick={handleNext} className='bg-gray-800 p-2 rounded-full text-xl text-white shadow-md'>
                                    <FaAngleRight />
                                </button>
                            </div>

                            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'></div>

                            <div className='container mx-auto'>
                                <div className='w-full absolute bottom-0 max-w-md px-4 py-4'>
                                    <h2 className='font-bold text-2xl lg:text-4xl text-white'>{data?.title || data?.name}</h2>
                                    <p className='text-white my-2'>{data.overview}</p>
                                    <div className='flex items-center gap-4 text-white'>
                                        <p>Peringkat: {Number(data.vote_average).toFixed(1)}+</p>
                                        <span>|</span>
                                        <p>Penonton: {Number(data.popularity).toFixed(0)}</p>
                                    </div>
                                    <Link to={"/" + data?.media_type + "/" + data.id}>
                                        <button className='bg-pink-600 px-4 py-2 text-white font-bold rounded mt-4 hover:bg-pink-700 transition-all'>
                                            Nonton Sekarang
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerHome;
