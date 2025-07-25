import React, { useEffect, useRef, useState } from 'react';
import styles from './musicPlayer.module.scss';

type Track = {
    title: string;
    artist: string;
    audioSrc: string;
    cover: string;
};

const tracks: Track[] = [
    // {
    //     title: 'Smells like Spirate',
    //     artist: 'NIRVANA',
    //     audioSrc: '/tracks/nirvana.mp3',
    //     cover: '/tracks/nirvana.jpg',
    // },
];

export const MusicPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);
    const coverRef = useRef<HTMLDivElement>(null);

    const track = tracks[trackIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        isPlaying ? audio.play() : audio.pause();
    }, [isPlaying, trackIndex]);

    const togglePlay = () => setIsPlaying(prev => !prev);

    const nextTrack = () => {
        setTrackIndex((prev) => (prev + 1) % tracks.length);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
        setIsPlaying(true);
    };

    return (
        <div className={styles.player}>
            <div
                className={`${styles.cover} ${isPlaying ? styles.spin : ''}`}
                ref={coverRef}
                style={{ backgroundImage: `url(${track.cover})` }}
            />
            <div className={styles.column}>
                <div className={styles.info}>
                    <div className={styles.title}>{track.title}</div>
                    <div className={styles.artist}>{track.artist}</div>
                </div>
                <div className={styles.controls}>
                    <button onClick={prevTrack}>⏮</button>
                    <button onClick={togglePlay}>{isPlaying ? '⏸' : '▶'}</button>
                    <button onClick={nextTrack}>⏭</button>
                </div>
                <audio ref={audioRef} src={track.audioSrc} />
            </div>
        </div>
    );
};
