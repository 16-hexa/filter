import styles from './productCard.module.scss';

interface Props {
    photo: any,
    name: string,
    price: number,
}

export const ProductCard = ({photo, name, price} : Props) => {
    return(
        <div className={styles.container}>
            <img src={photo} className={styles.photo} />
            <p className={styles.name}>{name}</p>
            <h2 className={styles.price}>{price} ₽</h2>
        </div>
    )
}