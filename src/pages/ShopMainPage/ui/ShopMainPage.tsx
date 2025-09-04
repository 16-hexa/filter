import styles from './shopMain.module.scss';
import pht1 from '@shared/images/shop/IMG_6003.png';
import pht2 from '@shared/images/shop/IMG_5997.png';
import head from '@shared/images/shop/IMG_6006.png';
import hoodie from '@shared/images/shop/IMG_5970.png';
import zips from '@shared/images/shop/IMG_6008.png';
import sweaters from '@shared/images/shop/IMG_6009.png';
import video from '@shared/video/Запись экрана 2025-08-25 в 11.49.06.mp4';
import {ExpandableImage} from "@shared/components";
import {useState} from "react";

const categories = [
    { img: head, label: "головной убор" },
    { img: hoodie, label: "худи" },
    { img: zips, label: "зипки" },
    { img: sweaters, label: "свитера" },
];

export const ShopMainPage = () => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleImage = (index: number) => {
        setExpandedIndex(prev => prev === index ? null : index);
    };

    return (
        <div className={styles.main_cointainer}>
            <div className={styles.container}>
                <div className={styles.background}></div>
                <p className={styles.title}>Filter.dept</p>
            </div>

            <div className={styles.information}>
                <div className={styles.photo_container}>
                    <img src={pht1} className={styles.photo}/>
                    <img src={pht2} className={styles.photo}/>
                </div>

                <div className={styles.text_container}>
                    <p>THE NEW</p>
                    <p>WO-MEN COLLECTION</p>
                    <p>SUMMER 2025</p>
                </div>
            </div>

            <p className={styles.category}>категория</p>

            <div className={styles.category_information}>
                {categories.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} className={styles.category_photo} alt={item.label} />
                        <p className={styles.clothes}>{item.label}</p>
                    </div>
                ))}
            </div>

            <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "auto", display: "block", padding: "100px 0" }}
            >
            </video>

            <div className={styles.expandable}>
                {Array.from({ length: 7 }).map((_, index) => (
                    <ExpandableImage
                        key={index}
                        src="src/shared/images/shop/IMG_5970.png"
                        alt="Supreme stack"
                        expanded={expandedIndex === index}
                        onToggle={() => toggleImage(index)}
                    />
                ))}
            </div>

        </div>
    )
}
