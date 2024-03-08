'use client'
import React, { useState } from "react";
import styles from "@/app/(afterWellcome)/_components/bottomTitleWrapper.module.css";
import OrderListItem from "@/app/(afterWellcome)/_components/OrderListItem";
type bottomTitleWrapperProps = {
    count:number
}
type OrderListType= {
    text:string,
    queryKey:string,
    active:boolean
}
function BottomTitleWrapper({count}:bottomTitleWrapperProps) {
    const [orderList, setOrderList] =
        useState< OrderListType[]>
        ([
            {text:'추천순',queryKey:'recommend',active:true},
            {text:'최신순',queryKey:'new',active:false},
            {text:'조회순',queryKey:'view',active:false}
        ])
    return (
        <div className={styles.bottomSectionTitleWrapper}>
            <div className={styles.countRecipesTextWrapper}>총 <div>{count}</div> 개의 맛있는 레시피가 있습니다.</div>
            <ul className={styles.orderListWrapper}>
                {
                    orderList.map(({ text,queryKey,active })=>
                        <OrderListItem text={text} queryKey={queryKey} key={queryKey} active={active} handledActive={setOrderList}/>
                    )
                }
            </ul>
        </div>
    );
}

export default BottomTitleWrapper;
