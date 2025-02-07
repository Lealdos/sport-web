import { useState } from 'react';
import { Howl, Howler } from 'howler';

export default function LivePlayer() {
    const sound = new Howl({
        src: [
            'https://stream-173.zeno.fm/4kprry7s3ehvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI0a3Bycnk3czNlaHZ2IiwiaG9zdCI6InN0cmVhbS0xNzMuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6InZBMld2MWxCU3JPdDFCMFAzUEp6YVEiLCJpYXQiOjE3Mzg5MDA0NTIsImV4cCI6MTczODkwMDUxMn0.Qh-QIfXXOwDcmIBasSpDlvWJiiHC0LYIZTztT_gOwiU',
        ],
        html5: true,
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const onClick = () => {
        if (isPlaying) {
            console.log(isPlaying);
            sound.pause();
            setIsPlaying(false);
        } else {
            console.log(isPlaying);
            sound.play();
            setIsPlaying(true);
        }
    };
    console.log(sound);
    console.log(isPlaying);
    return (
        <section className=' py-10 px-4'>
            <div className='max-w-sm mx-auto bg-blue-900  p-5 rounded-lg shadow-sm shadow-red-900 inset-shadow-red-500'>
                <h2 className='text-2xl font-bold mb-4 text-center text-white'>
                    Escuchar en vivo
                </h2>
                <div className='flex items-center justify-center space-x-4'>
                    <button
                        onClick={() => onClick()}
                        className='bg-red-700 text-white p-3 rounded-full hover:bg-red-600 transition-colors shadow-2xl'
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? (
                            <img
                                src='/pause_circle.svg'
                                alt='Pause'
                                className='w-10 h-10'
                            />
                        ) : (
                            <img
                                src='/play_circle.svg'
                                alt='Play'
                                className='w-10 h-10'
                            />
                        )}
                    </button>
                    <div className='text-lg font-semibold text-white'>
                        {isPlaying
                            ? 'Escuchando trasmisión'
                            : 'Click para escuchar'}
                    </div>
                    <img
                        src='/volume_up.svg'
                        alt='Logo'
                        className='w-10 h-10'
                    />
                </div>
            </div>
        </section>
    );
}
