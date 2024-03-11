'use client'
import React from 'react';
import styles from "@/app/(afterWellcome)/_components/recipeTypeItem.module.css";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";
type RecipeTypeItemProps = {
    item: {
        url: string,
        label: string,
        imageSrc:  StaticImageData
    }
}
function RecipeTypeItem({item}:RecipeTypeItemProps) {
    const {url,imageSrc,label} =item;
    const {setInitValue} = useSearchTextStore()
    console.log(url)
    const onClick =()=>{
        setInitValue();
    }
    return (
        <Link href={url} onClick={onClick}>
            <div className={styles.recipeTypeItem}>
                <Image className={styles.recipeTypeImg} src={imageSrc} alt={label} priority/>
                <span className={styles.recipeTypeLabel}>{label}</span>
            </div>
        </Link>
    );
}

export default RecipeTypeItem;
