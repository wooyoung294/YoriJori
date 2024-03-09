"use client";
import React from "react";
import styles from "./orderListItem.module.css";
import cx from "classnames";
import useRecipePosts from "@/app/(afterWellcome)/_lib/getPostRecipesMutation";
import { usePathname, useRouter } from "next/navigation";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";

type orderListItemProps = {
    text: string,
    queryKey: string,
    active: boolean,
    handledActive: Function,
}
type orderListItem = {
    text: string,
    queryKey: string,
    active: boolean,
}

function OrderListItem({
                           text,
                           queryKey,
                           active,
                           handledActive
                       }: orderListItemProps) {

    const path = usePathname();
    const { searchText } = useSearchTextStore();
    const router = useRouter();
    const { getRecipePostsMutation } = useRecipePosts();
    const onClick: Function = (order: "recommend" | "new" | "view") => {
        getRecipePostsMutation(order);
        handledActive((prevValues: orderListItem[]) => (
            prevValues.map(prevValue =>
                prevValue.queryKey === order
                    ? {
                        ...prevValue,
                        active: true
                    }
                    : {
                        ...prevValue,
                        active: false
                    }
            )
        ));
        if(path === '/search'){
            router.push(`${path}?searchText=${searchText}&order=${queryKey}`)
        }
        else{
            router.push(`${path}?searchText=${searchText}&order=${queryKey}`)
        }
    };
    return (
        <li className={active ? cx(styles.orderListItemLi, styles.orderActiveLi) : styles.orderListItemLi}
            onClick={() => onClick(queryKey)}>
            {text}
        </li>

    );
}

export default OrderListItem;
