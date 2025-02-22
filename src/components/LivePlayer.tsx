import { useState, useRef } from 'react';
import { Howl } from 'howler';

const URL_STREAM =
    'https://stream-59.zeno.fm/4kprry7s3ehvv?zs=kDFMYekOS6u3My1hsQNOGw/currentsong?sid=1';

const useHowl = function ({ src }: { src: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const howlRef = useRef<Howl>(
        new Howl({
            src,
            html5: true,
            onend: () => {
                setIsPlaying(false);
            },
            onplay: () => {
                setIsPlaying(true);
            },
            onpause: () => {
                setIsPlaying(false);
            },
            onstop: () => {
                setIsPlaying(false);
            },
        })
    );

    return {
        play: (spriteOrId?: string | number): number => {
            return howlRef.current.play(spriteOrId);
        },
        pause: (id?: number): Howl => {
            return howlRef.current.pause(id);
        },
        stop: (id?: number): Howl => {
            return howlRef.current.stop(id);
        },
        mute: (muted = true, id?: number): Howl => {
            setIsMuted(true);
            return howlRef.current.mute(muted, id);
        },
        volume: (idOrSetVolume: number): number | Howl => {
            return howlRef.current.volume(idOrSetVolume);
        },
        unmute: (muted = false, id?: number): Howl => {
            setIsMuted(false);
            return howlRef.current.mute(muted, id);
        },

        isPlaying,
        isMuted,
    };
};

export function LivePlayer() {
    const { isPlaying, isMuted, play, stop, mute, unmute } = useHowl({
        src: URL_STREAM,
    });

    const HandlerPlayStream = () => {
        if (isPlaying) {
            stop();
        } else {
            play();
        }
    };

    const onVolumenChange = () => {
        if (isMuted) {
            unmute();
        } else {
            mute(true);
        }
    };

    return (
        <section className=' py-10 px-4'>
            <div className='max-w-sm mx-auto bg-blue-700 p-5 rounded-lg shadow-md shadow-red-900 inset-shadow-red-500'>
                <h2 className='text-2xl font-bold mb-4 text-center text-white'>
                    Escuchar en vivo
                </h2>
                <div className='flex items-center justify-center space-x-4'>
                    <button
                        onClick={HandlerPlayStream}
                        className='bg-red-700 text-white p-3 rounded-full hover:bg-red-600 transition-colors shadow-2xl
                        disabled:bg-gray-400 disabled:text-gray-500 disabled:shadow-none'
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
                                src='/icons/play_circle.svg'
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
                    <button
                        onClick={onVolumenChange}
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                        {isMuted ? (
                            <img
                                src='/icons/volume_off.svg'
                                alt='Mute'
                                className='w-10 h-10'
                            />
                        ) : (
                            <img
                                src='/icons/volume_up.svg'
                                alt='volumen up'
                                className='w-10 h-10'
                            />
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}
