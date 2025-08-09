import React, { useEffect, useRef, useState } from 'react';
import styles from './musicPlayer.module.scss';
import {tracks} from "@shared/components/MusicPlayer/tracks.ts";

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
            <div className={styles.coverWrapper}>
                <div className={styles.circle}></div>
                <div
                    className={`${styles.cover} ${isPlaying ? styles.spin : ''}`}
                    style={{ backgroundImage: `url(${track.cover})` }}
                >
                    <div className={styles.centerHole} />
                </div>
            </div>

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
