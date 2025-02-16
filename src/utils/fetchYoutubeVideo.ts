const YOUTUBE_CHANNEL_ID = 'UCYp336udlILXiGcQ-fGGvyg';
const API_KEY = import.meta.env.GOOGLE_API_KEY; //modificar llave keys en .env

export async function fetchYoutubeVideos() {
    const liveUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;

    const latestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&order=date&type=video&maxResults=1&key=${API_KEY}`;

    try {
        let LastChannelVideo = await fetch(liveUrl);
        let YoutubeVideoIsLiveJson = await LastChannelVideo.json();
        if (LastChannelVideo.ok && YoutubeVideoIsLiveJson.items.length > 0) {
            let YoutubeVideoId = YoutubeVideoIsLiveJson.items[0].id.videoId;
            return await YoutubeVideoId;
        }
        LastChannelVideo = await fetch(latestUrl);
        let LastChannelVideoJson = await LastChannelVideo.json();
        let YoutubeVideoId = LastChannelVideoJson.items[0].id.videoId;
        return await YoutubeVideoId;
    } catch (error) {
        console.error('Error fetching YouTube data:', error);
        return error;
    }
}

export const YoutubeVideoID = await fetchYoutubeVideos();
