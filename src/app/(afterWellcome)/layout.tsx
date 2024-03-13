import React from "react";
import styles from "@/app/(afterWellcome)/layout.module.css";
import {all,soup,sub,rice,pasta,main} from "../../../public/recipetype/recipeTypeIcon"
import logo from "../../../public/logo.png";
import RecipeTypeItem from "@/app/(afterWellcome)/_components/RecipeTypeItem";
import SearchArea from "@/app/(afterWellcome)/_components/SearchArea";
import Image, { StaticImageData } from "next/image";
import Profile from "@/app/(afterWellcome)/_components/Profile";
import RQProvider from "@/app/(afterWellcome)/_components/RQProvider";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getRecipePosts, getTotalCount, Recipe } from "@/app/api/recipe";

type recipeTypeItem = {
    url: string,
    imageSrc: StaticImageData,
    label: string
}
const recipeTypeItems: recipeTypeItem[] = [
    {
        url: "/home?order=recommend",
        imageSrc: all,
        label: "전체"
    },
    {
        url: "/main?order=recommend",
        imageSrc: main,
        label: "메인반찬"
    },
    {
        url: "/sub?order=recommend",
        imageSrc: sub,
        label: "밑반찬"
    },
    {
        url: "/soup?order=recommend",
        imageSrc: soup,
        label: "찌개/국"
    },
    {
        url: "/rice?order=recommend",
        imageSrc: rice,
        label: "밥"
    },
    {
        url: "/pasta?order=recommend",
        imageSrc: pasta,
        label: "면"
    }
];
export default async function Layout({ children,modal }: { children: React.ReactNode,modal: React.ReactNode }) {

    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery<
        Recipe[],
        unknown,
        Recipe[],
        [_1:string,_2:string,_3:{ category:string|string[],order:string,searchText:string }],
        number>
    ({
        queryKey: ["recipe", "posts",{ category:'home',order:'recommend',searchText:'' }],
        queryFn: getRecipePosts,
        initialPageParam: 0
    });
    await queryClient.prefetchQuery({
        queryKey:['recipe','count',{ category:'home',order:'recommend',searchText:'' }],
        queryFn:getTotalCount}
    )
    const dehydratedState = dehydrate(queryClient);
    return (
        <RQProvider>
            <HydrationBoundary state={dehydratedState}>
                <div className={styles.container}>
                    <header className={styles.topSection}>
                        <div className={styles.logoWrapper}>
                            <Image className={styles.logo} src={logo} width={338} height={112} priority alt={"logo"} />
                        </div>
                        <div className={styles.topSearchSection}>
                            <SearchArea />
                            <div className={styles.recipeTypeWrapper}>
                                {
                                    recipeTypeItems.map((item) =>
                                        <RecipeTypeItem item={item} key={item.url} />)
                                }
                            </div>
                        </div>
                        <Profile />
                    </header>
                    <div className={styles.bottomSectionWrapper}>
                        {children}
                        {modal}
                    </div>
                </div>
            </HydrationBoundary>
        </RQProvider>
    );
}
