import React from 'react';
import { IoClose } from 'react-icons/io5';
import useFetchDetails from '../hooks/useFetchDetails';

const VideoPlay = ({ data, close, media_type }) => {
    const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`);

    return (
        <section className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
            <div className='relative w-full h-full'>
                <button
                    onClick={close}
                    className='absolute top-4 right-4 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-300 transition-transform transform hover:scale-110'
                >
                    <IoClose className='text-3xl' />
                </button>

                <iframe
                    src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
                    title='Video Player'
                    className='w-full h-full'
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default VideoPlay;
