import { useState, useEffect } from 'react';

const YOUTUBE_CHANNEL_ID = 'UCYp336udlILXiGcQ-fGGvyg';
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

async function fetchYoutubeVideos() {
    const liveUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;

    const latestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&order=date&type=video&maxResults=1&key=${API_KEY}`;

    console.log('prueba', liveUrl);
    try {
        let YoutubeVideo = await fetch(liveUrl);
        let YoutubeVideoIsLiveJson = await YoutubeVideo.json();
        if (YoutubeVideo.ok && YoutubeVideoIsLiveJson.items.length > 0) {
            let YoutubeVideoId = YoutubeVideoIsLiveJson.items[0].id.videoId;
            return YoutubeVideoId;
        }
        YoutubeVideo = await fetch(latestUrl);
        return (await YoutubeVideo.json()).items[0].id.videoId;
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        return error;
    }
}

export const YouTubeLive = () => {
    const [videoId, setVideoId] = useState(null);

    useEffect(() => {
        fetchYoutubeVideos().then(setVideoId);
    }, []);

    if (!videoId) return <p>Error cargando el video</p>;

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
