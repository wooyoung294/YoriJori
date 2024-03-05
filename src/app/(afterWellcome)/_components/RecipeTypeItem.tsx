import React from 'react';
import styles from "@/app/(afterWellcome)/_components/recipeTypeItem.module.css";
import Link from "next/link";
import Image from "next/image";
type RecipeTypeItemProps = {
    url:string,
    label:string,
    imageSrc:File
}
function RecipeTypeItem({url,imageSrc,label}:RecipeTypeItemProps) {
    return (
        <Link href={url}>
            <div className={styles.recipeTypeItem}>
                <Image className={styles.recipeTypeImg} src={imageSrc} alt={label} priority={'empty'}/>
                <span className={styles.recipeTypeLabel}>{label}</span>
            </div>
        </Link>
    );
}

export default RecipeTypeItem;