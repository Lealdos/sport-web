import { useState, useEffect } from 'react';

import { fetchYoutubeVideos } from '../utils/fetchYoutubeVideo';

export const YouTubeLive = () => {
    const [videoId, setVideoId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const leadID = async () => {
            const YoutubeIDVideo = await fetchYoutubeVideos();
            setVideoId(YoutubeIDVideo);
            setLoading(false);
        };
        leadID();
    }, []);

    return (
        <div className='mx-auto flex flex-col items-center justify-center '>
            <h2 className='text-white text-2xl font-bold mb-4 mx-auto text-center'>
                Miranos en Youtube
            </h2>
            {loading ? (
                <output className='mx-auto flex items-center justify-center w-96 h-60 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700'>
                    <svg
                        className='w-10 h-10 text-gray-200 dark:text-gray-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 16 20'
                    >
                        <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                        <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z' />
                    </svg>
                    <span className='sr-only'>Loading...</span>
                </output>
            ) : (
                <iframe
                    title={`YouTube video: ${videoId}`}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='mx-auto rounded w-96 h-60'
                ></iframe>
            )}
        </div>
    );
};
