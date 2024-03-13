"use client";
import React, { Fragment, useEffect } from "react";
import styles from "@/app/(afterWellcome)/_components/postConainer.module.css";
import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterWellcome)/_components/Post";
import BottomTitleWrapper from "@/app/(afterWellcome)/_components/BottomTitleWrapper";
import { getRecipePosts, getTotalCount, Recipe } from "@/app/api/recipe";
import { useParams } from "next/navigation";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";
import { useInView } from "react-intersection-observer";

function PostContainer() {
    const params = useParams();
    const {category} = params
    const {searchText,order} = useSearchTextStore();
    const { data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage } =
        useInfiniteQuery<
            Recipe[],
            unknown,
            InfiniteData<Recipe[]>,
            [_1:string,_2:string,_3:{ category:string|string[],order:string,searchText:string }],
            number
        >
        ({
            queryKey: ["recipe", "posts",{category,order,searchText}],
            queryFn: getRecipePosts,
            initialPageParam:0,
            getNextPageParam:(lastPage, allPages, lastPageParam, allPageParams)=>{
                if(lastPage.length === 14){
                    return lastPageParam+1;
                }
                else{
                    return null;
                }
            }
        });
    const{ref:observer,inView}=useInView({
        // 보이자 마자 바로 호출 할꺼여서 0
        threshold:0,
        delay:2000,
    })
    const {data:num} = useQuery({queryKey:['recipe','count',{category,order,searchText}],queryFn:getTotalCount})
    useEffect(() => {
        if(inView){
            hasNextPage && fetchNextPage()
        }
    }, [inView, hasNextPage, fetchNextPage]);
    if (isError) {
        return "실패";
    }
    if (isLoading) {
        return "로딩중";
    }

    return (
        <>
            <BottomTitleWrapper count={num} />
            <div className={styles.postContainer}>
                {
                    data?.pages.map((pages, idx) => (
                        <Fragment key={idx}>
                            {pages.map((recipe: Recipe, idx) =>
                                <Post recipe={recipe} key={recipe.postId} />)}
                        </Fragment>
                    ))
                }
            </div>
            {hasNextPage &&
                <div className={styles.loadingBar} ref={observer}><h3>로딩중....</h3></div>

            }


        </>
    );
}

export default PostContainer;
