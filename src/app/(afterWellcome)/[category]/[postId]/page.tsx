'use client'
import React, { useEffect } from "react";
import styled from './page.module.css'
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getRecipeDetail, increaseViewCount } from "@/app/api/recipe";
export default function RecipeDetail() {
    const params = useParams();
    const {postId} = params;
    const { data, isLoading, isError} =
        useQuery(
            { queryKey: ["recipe", "detail"],
                queryFn: () => getRecipeDetail(postId as string) }
        );
    useEffect(()=>{
        increaseViewCount(postId as string)
    },[postId])
    if (isError) {
        return "실패";
    }
    if (isLoading) {
        return "로딩중";
    }
    return (
        <div className={styled.recipeDetailWrapper}>
            <div className={styled.imgWrapper}>
                <Image src={`data:image/jpeg;base64,${data.imageSrc}`}
                       alt={'테스트'}
                       fill
                />
            </div>
            <div className={styled.textWrapper}>
                <h2> {data.title} </h2>
                <br/>
                <pre className={styled.recipeStep}>
                    <h3> 조리방법 </h3>
                    {data.description}
                </pre>
            </div>
        </div>
    );
}
