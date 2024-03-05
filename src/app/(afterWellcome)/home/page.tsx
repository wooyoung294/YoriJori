import OrderListItem from "@/app/(afterWellcome)/_components/OrderListItem";
import React from "react";
import styles from '@/app/(afterWellcome)/home/page.module.css';
import test from "../../../../public/recipetype/test.jpg";
import Image from "next/image";
export default function Home() {
    return (
        <>
            <div className={styles.bottomSectionTitleWrapper}>
                <div className={styles.countRecipesTextWrapper}>총 <div>17,565</div> 개의 맛있는 레시피가 있습니다.</div>
                <ul className={styles.orderListWrapper}>
                    <li className={styles.orderActiveLi}>
                        <span>추천순</span>
                    </li>
                    <OrderListItem text={'최신순'}/>
                    <OrderListItem text={'조회순'}/>
                </ul>
            </div>
            <div className={styles.postContainer}>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div><div className={styles.postItem}>
                <div className={styles.postItemImgWrapper}>
                    <Image src={test} layout={'fill'} priority={'empty'}/>
                </div>
                <div className={styles.postItemLabelWrapper}>
                    맛있는 김치찌개 조회수:500
                </div>
            </div>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div>
                <div className={styles.postItem}>
                    <div className={styles.postItemImgWrapper}>
                        <Image src={test} layout={'fill'} priority={'empty'}/>
                    </div>
                    <div className={styles.postItemLabelWrapper}>
                        맛있는 김치찌개 조회수:500
                    </div>
                </div>
            </div>
        </>
    );
}
