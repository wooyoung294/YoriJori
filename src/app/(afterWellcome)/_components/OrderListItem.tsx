"use client";
import React from "react";
import styles from "./orderListItem.module.css";
import cx from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";

type orderListItemProps = {
    text: string,
    queryKey: string,
}

function OrderListItem({
                           text,
                           queryKey,
                       }: orderListItemProps) {

    const path = usePathname();
    const { searchText,order,onChangeOrder } = useSearchTextStore();
    const router = useRouter();
    const onClick: Function = () => {
        onChangeOrder(queryKey)
        router.push(`${path}?order=${queryKey}`)
        if(path === '/search'){
            router.push(`${path}?searchText=${searchText}&order=${queryKey}`)
        }
        else{
            router.push(`${path}?searchText=${searchText}&order=${queryKey}`)
        }
    };
    return (
        <li className={queryKey === order ? cx(styles.orderListItemLi, styles.orderActiveLi) : styles.orderListItemLi}
            onClick={() => onClick(queryKey)}>
            {text}
        </li>

    );
}

export default OrderListItem;
