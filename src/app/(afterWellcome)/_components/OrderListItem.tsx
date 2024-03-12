"use client";
import React, { useEffect } from "react";
import styles from "./orderListItem.module.css";
import cx from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";

function OrderListItem() {
    const path = usePathname();
    const searchParams = useSearchParams();
    const { order,onChangeOrder } = useSearchTextStore();
    const router = useRouter();

    useEffect(() => {
        onChangeOrder(searchParams.get("order"))
    }, [searchParams,onChangeOrder]);
    const onClick: Function = (queryKey:string) => {
        onChangeOrder(queryKey)
        router.push(`${path}?order=${queryKey}`)
    };
    return (
        <>
            <li className={"recommend" === order ? cx(styles.orderListItemLi, styles.orderActiveLi) : styles.orderListItemLi}
                onClick={() => onClick("recommend")}>
                추천순
            </li>
            <li className={'new' === order ? cx(styles.orderListItemLi, styles.orderActiveLi) : styles.orderListItemLi}
                onClick={() => onClick('new')}>
                최신순
            </li>
            <li className={"view" === order ? cx(styles.orderListItemLi, styles.orderActiveLi) : styles.orderListItemLi}
                onClick={() => onClick("view")}>
                조회순
            </li>
        </>

    );
}

export default OrderListItem;
