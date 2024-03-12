import React from "react";
import styles from "@/app/(afterWellcome)/_components/bottomTitleWrapper.module.css";
import OrderListItem from "@/app/(afterWellcome)/_components/OrderListItem";
type bottomTitleWrapperProps = {
    count:number
}
function BottomTitleWrapper({count}:bottomTitleWrapperProps) {
    return (
        <div className={styles.bottomSectionTitleWrapper}>
            <div className={styles.countRecipesTextWrapper}>총
                &nbsp;<div>{count?.toLocaleString()}</div>&nbsp;
                개의 맛있는 레시피가 있습니다.</div>
            <ul className={styles.orderListWrapper}>
                <OrderListItem />
            </ul>
        </div>
    );
}

export default BottomTitleWrapper;
