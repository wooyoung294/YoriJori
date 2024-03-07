'use client'
import React, {useEffect} from 'react';
import styles from "@/app/(afterWellcome)/_components/recipeTypeItem.module.css";
import Link from "next/link";
import Image from "next/image";
import {useSelectedLayoutSegment} from "next/navigation";
type RecipeTypeItemProps = {
    item: {
        url: string,
        label: string,
        imageSrc: File
    }
}
function RecipeTypeItem({item}:RecipeTypeItemProps) {
    const {url,imageSrc,label} =item;

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