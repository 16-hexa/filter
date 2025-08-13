// import styles from './adress.module.scss';
// import image1 from '@shared/images/spots/image.png';
// import image2 from '@shared/images/spots/image-2.png';
// import image3 from '@shared/images/spots/image-1.png';
//
// export const Address = () => {
//     return(
//         <div className={styles.container} id="adress">
//             <h2 className={styles.spots}>Наши споты</h2>
//
//             <div className={styles.photo_container}>
//
//                 <div className={styles.item}>
//                     <img className={styles.img} src={image1}/>
//                     <p className={styles.adress}>ул. Габдуллы Тукая, 71</p>
//                 </div>
//
//                 <div className={styles.item}>
//                     <img className={styles.img} src={image2}/>
//                     <p className={styles.adress}>ул. Шаляпина, 26</p>
//                 </div>
//
//                 <div className={styles.item}>
//                     <img className={styles.img} src={image3}/>
//                     <p className={styles.adress}>ул. Чернышевского, 17</p>
//                 </div>
//
//             </div>
//         </div>
//     )
// }

import { useState } from 'react';
import styles from './adress.module.scss';
import image1 from '@shared/images/spots/image.png';
import image2 from '@shared/images/spots/image-2.png';
import image3 from '@shared/images/spots/image-1.png';

const spots = [
    { img: image1, text: 'ул. Габдуллы Тукая, 71' },
    { img: image2, text: 'ул. Шаляпина, 26' },
    { img: image3, text: 'ул. Чернышевского, 17' },
];

export const Address = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? spots.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === spots.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={styles.container} id="adress">
            <h2 className={styles.spots}>Наши споты</h2>

            <div className={styles.photo_container}>
                {spots.map((spot, i) => (
                    <div className={styles.item} key={i}>
                        <img className={styles.img} src={spot.img} alt="" />
                        <p className={styles.adress}>{spot.text}</p>
                    </div>
                ))}
            </div>

            <div className={styles.slider}>
                <button className={styles.arrow} onClick={prevSlide}>←</button>
                <div className={styles.slide}>
                    <img className={styles.img} src={spots[current].img} alt="" />
                    <p className={styles.adress}>{spots[current].text}</p>
                </div>
                <button className={styles.arrow} onClick={nextSlide}>→</button>
            </div>
        </div>
    );
};
