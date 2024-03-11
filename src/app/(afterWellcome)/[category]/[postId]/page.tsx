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
                <Image className={styled.i} src={`data:image/jpeg;base64,${data.imageSrc}`}
                       alt={'이미지'}
                       fill
                />
            </div>
            <div className={styled.textWrapper}>
                <h2> {data.title} </h2>
                <br/>
                <div className={styled.stepTitle}>
                    조리방법
                </div>
                <pre className={styled.recipeStep}>
                    {data.description}
                </pre>
            </div>
        </div>
    );
}
