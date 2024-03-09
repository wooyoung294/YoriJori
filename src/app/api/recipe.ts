import { StaticImageData } from "next/image";

export interface Recipe {
    postId: number,
    title: string,
    User: string,
    Images: StaticImageData,
}

export async function getRecipePosts(
    category: string = "",
    order: "recommend" | "new" | "view" = "recommend",
    searchText:string = ""
    )
{
    const res = await fetch(
        `http://localhost:9090/api/food?category=${category}&order=${order}&searchText=${searchText}`,
        {
            next: {
                tags: ["recipe", "posts"]
            },
            cache: "no-store"
        });
    if (!res.ok) {
        throw new Error("Failed to getRecipePosts");
    }
    return res.json();
}
