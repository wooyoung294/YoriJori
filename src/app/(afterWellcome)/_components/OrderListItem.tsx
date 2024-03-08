'use client'
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getRecipePosts, Recipe } from "@/app/api/recipe";
import styles from "./orderListItem.module.css"
import cx from 'classnames'
type orderListItemProps = {
    text:string,
    queryKey:string,
    active:boolean,
    handledActive:Function
}
function OrderListItem({text,queryKey,active,handledActive}:orderListItemProps) {
    const queryClient = useQueryClient();
    const onSuccess = (data:Recipe[]) =>{
        queryClient.setQueryData(
            ["recipe", "posts"],data
        )
    }

    const {mutate:getRecipePostsFitOrder} =
        useMutation({
            mutationFn:(order: "recommend" | "new" | "view")=>
                getRecipePosts('main',order),onSuccess
        })

    const onClick:Function = (order: "recommend" | "new" | "view")=>{
        getRecipePostsFitOrder(order)
        handledActive((prevValues:orderListItemProps[])=>(
            prevValues.map(prevValue=>
                prevValue.queryKey === order
                    ? {...prevValue,active:true}
                    : {...prevValue,active:false}
            )
        ))
    }
    return (
        <li className={active ? cx(styles.orderListItemLi,styles.orderActiveLi):styles.orderListItemLi} onClick={()=>onClick(queryKey)}>
            {text}
        </li>
    );
}

export default OrderListItem;
