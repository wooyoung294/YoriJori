"use client";
import React, { useEffect } from "react";
import styles from "@/app/(afterWellcome)/_components/postConainer.module.css";
import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterWellcome)/_components/Post";
import BottomTitleWrapper from "@/app/(afterWellcome)/_components/BottomTitleWrapper";
import { getRecipePosts, Recipe } from "@/app/api/recipe";
import { useParams } from "next/navigation";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";

function PostContainer() {
    const params = useParams();
    const {category} = params
    const {searchText,order} = useSearchTextStore();
    const { data, isLoading, isError,refetch } =
        useQuery({ queryKey: ["recipe", "posts"], queryFn: () => getRecipePosts(category as string,order,searchText) });
    useEffect(() => {
        refetch()
    }, [order, refetch]);
    if (isError) {
        return "실패";
    }
    if (isLoading) {
        return "로딩중";
    }
    return (
        <>
            <BottomTitleWrapper count={data.length}/>
            <div className={styles.postContainer}>
                {
                    data?.map((recipe: Recipe,idx:number) => (
                        <Post recipe={recipe} key={idx} />
                    ))
                }
            </div>
        </>
    );
}

export default PostContainer;
