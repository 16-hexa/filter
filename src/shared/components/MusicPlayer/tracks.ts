import smells from "@shared/images/tracks/NIRVANA/Smells like Spirate/smells.jpeg";
import crush from '@shared/images/tracks/PlayboiCarti/G WAGON /hq720.jpg';
import choppa from '@shared/images/tracks/PlayboiCarti/Choppa Wont Miss/maxresdefault.jpg';
import stars from '@shared/images/tracks/Kendrick/AllTheStars/ab67616d0000b273c027ad28821777b00dcaa888.jpeg';
import sleep from '@shared/images/tracks/NIRVANA/Where Did You Sleep Last Night/sleep.webp'

import {Track} from "@/models";

export const tracks: Track[] = [
    {
        title: 'Smells like Spirate',
        artist: 'NIRVANA',
        audioSrc: 'src/shared/images/tracks/NIRVANA/Smells like Spirate/Fame_on_Fire_-_Smells_Like_Teen_Spirit_Nirvana_Cover_(SkySound.cc).mp3',
        cover: smells,
    },

    {
        title: 'Crush Out',
        artist: 'Playboi Carti',
        audioSrc: 'src/shared/images/tracks/PlayboiCarti/G WAGON /Playboi_Carti_-_G_WAGON_CRASH_OUT_Remastered_(SkySound.cc).mp3',
        cover: crush,
    },

    {
        title: 'Choppa Won\'t Miss',
        artist: 'Playboi Carti',
        audioSrc: 'src/shared/images/tracks/PlayboiCarti/Choppa Wont Miss/Playboi_Carti_feat._Young_Thug_-_Choppa_Won_t_Miss_(SkySound.cc).mp3',
        cover: choppa,
    },

    {
        title: 'All the stars',
        artist: 'Kendrick Lamar feat. SZA',
        audioSrc: 'src/shared/images/tracks/Kendrick/AllTheStars/Kendrick Lamar - All The Stars (feat. SZA).mp3',
        cover: stars,
    },

    {
        title: 'Where Did You Sleep Last Night',
        artist: 'NIRVANA',
        audioSrc: 'src/shared/images/tracks/NIRVANA/Where Did You Sleep Last Night/nirvana-where-did-you-sleep-last-night-(download-zaycev.net).mp3',
        cover: sleep,
    },
];