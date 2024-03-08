import React from 'react';
import styles from "@/app/(afterWellcome)/_components/post.module.css";
import Image from "next/image";
import { Recipe } from "@/app/api/recipe";
type postProps = {
    recipe:Recipe
}
function Post({recipe}:postProps) {
    const {title,User,Images} = recipe;
    return (
        <div className={styles.postItem}>
            <div className={styles.postItemImgWrapper}>
                <Image src={Images} width={218} height={240} priority alt={'이미지'}/>
            </div>
            <div className={styles.postItemLabelWrapper}>
              {User}
              {title}:500
            </div>
        </div>
    );
}

export default Post;
