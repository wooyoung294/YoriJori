import React from "react";
import styles from "@/app/(afterWellcome)/_components/post.module.css";
import Image from "next/image";
import { Recipe } from "@/app/api/recipe";
import { timeForToday } from "@/app/(afterWellcome)/_lib/timeForToday";
import eye from "../../../../public/etcImg/eye.svg"
type postProps = {
    recipe: Recipe
}

function Post({ recipe }: postProps) {
    const {
        title,
        user,
        imageSrc,
        views,
        createdAt
    } = recipe;
    return (
        <div className={styles.postItem}>
            <div className={styles.postItemImgWrapper}>
                <Image src={`data:image/jpeg;base64,${imageSrc}`} width={218} height={240} priority alt={"이미지"} />
            </div>
            <div className={styles.postItemLabelWrapper}>
                <div>
                    {title}
                </div>

                <div>
                    {user}
                </div>
                <div className={styles.postItemLabelInnerWrapper}>
                    <div className={styles.viewWrapper}>
                        <Image src={eye} alt={'조회수'}/>&nbsp;:&nbsp;{views}
                    </div>
                    <div>
                        {timeForToday(createdAt)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
