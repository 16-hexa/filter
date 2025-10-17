import styles from './catalog.module.scss';
import mainPhoto from '@shared/images/shop/catalog_main_photo.png';
import { products } from "@pages/Catalog/data/products.ts";
import { PopupSideMenu, ProductCard } from "@shared/components";
import { FooterShop, HeaderShop } from "@/widgets";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Catalog = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <HeaderShop />

            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <img src={mainPhoto} className={styles.photo} />
                    <p className={styles.logo}>Filter.dept</p>
                </div>

                <div className={styles.filter_container}>
                    <button className={styles.button_filter} onClick={openMenu}>
                        фильтр
                    </button>

                    <button className={styles.button_filter}>
                        сортировать по возрастанию цены
                    </button>
                </div>

                <div className={styles.catalog}>
                    {products.map((item, index) => (
                        <Link to="/item" key={index}>
                            <ProductCard
                                photo={item.photo}
                                name={item.name}
                                price={item.price}
                            />
                        </Link>
                    ))}
                </div>
            </div>

            {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

            <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ''}`}>
                <PopupSideMenu onClose={closeMenu} />
            </div>

            <FooterShop />
        </>
    );
};
