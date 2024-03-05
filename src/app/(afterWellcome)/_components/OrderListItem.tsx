import React from 'react';
import styles from "@/app/(afterWellcome)/layout.module.css";
import Link from "next/link";

type orderListItemProps = {
    text:string,
}
function OrderListItem({text}:orderListItemProps) {
    return (
        <li>
            {text}
        </li>
    );
}

export default OrderListItem;