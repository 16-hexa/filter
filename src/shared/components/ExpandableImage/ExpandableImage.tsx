import React from "react";
import styles from "./expandableImage.module.scss";

interface ExpandableImageProps {
    src: string;
    alt?: string;
    expanded: boolean;
    onToggle: () => void;
}

export const ExpandableImage: React.FC<ExpandableImageProps> = ({ src, alt, expanded, onToggle }) => {
    return (
        <div
            className={`${styles.wrapper} ${expanded ? styles.expanded : ""}`}
            onClick={onToggle}
        >
            <img src={src} alt={alt || "image"} />
            <button
                className={styles.closeBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    onToggle();
                }}
            >
                ×
            </button>
        </div>
    );
};
