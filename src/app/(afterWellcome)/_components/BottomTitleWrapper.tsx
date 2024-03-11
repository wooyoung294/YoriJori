import React from "react";
import styles from "@/app/(afterWellcome)/_components/bottomTitleWrapper.module.css";
import OrderListItem from "@/app/(afterWellcome)/_components/OrderListItem";
type bottomTitleWrapperProps = {
    count:number
}
type OrderListType= {
    text:string,
    queryKey:string,
}
function BottomTitleWrapper({count}:bottomTitleWrapperProps) {
    const orderList:OrderListType[] = [
        {text:'추천순',queryKey:'recommend'},
        {text:'최신순',queryKey:'new'},
        {text:'조회순',queryKey:'view'}
    ];
    return (
        <div className={styles.bottomSectionTitleWrapper}>
            <div className={styles.countRecipesTextWrapper}>총&nbsp;<div>{count.toLocaleString()}</div>&nbsp;개의 맛있는 레시피가 있습니다.</div>
            <ul className={styles.orderListWrapper}>
                {
                    orderList.map(({ text,queryKey })=>
                        <OrderListItem text={text} queryKey={queryKey} key={queryKey}/>
                    )
                }
            </ul>
        </div>
    );
}

export default BottomTitleWrapper;
