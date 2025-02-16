import { useState, useEffect } from 'react';

import { YoutubeVideoID } from '../utils/fetchYoutubeVideo';

export const YouTubeLive = () => {
    const [videoId, setVideoId] = useState(YoutubeVideoID);

    useEffect(() => {
        setVideoId(YoutubeVideoID);
    }, [videoId]);

    if (!videoId) return <p className='text-center'>Error cargando el video</p>;

    return (
        <iframe
            title={`YouTube video: ${videoId}`}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='mx-auto rounded'
        ></iframe>
    );
};
