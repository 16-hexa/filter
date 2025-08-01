import styles from './founder.module.scss';
import founderImg1 from '@shared/images/ildar/founderImg1.png';
import founderImg2 from '@shared/images/ildar/founderImg2.png';

export const Founder = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.founderImg1}>
                    <img src={founderImg1} alt="Ильдар Габидуллин на улице" />
                </div>
                <div className={styles.founderImg2}>
                    <img src={founderImg2} alt="Ильдар Габидуллин сидит у стены" />
                </div>
                <div className={styles.textBlock}>
                    <h2>Ильдар<br />Габидуллин</h2>
                    <p>
                        известный предприниматель из Казани, основатель кофейни «Фильтр». В 2019 году он реализовал концепцию объединения кофейни и винтажного магазина, что было новаторским решением для города. Ильдар уже имел опыт в кофейном бизнесе, ранее управляя проектом «Диван»
                    </p>
                </div>
                <div className={styles.decorativeText}>Style</div>
            </div>
        </div>
    );
};
