import { StaticImageData } from "next/image";

export interface Recipe {
    postId: number,
    title: string,
    User: string,
    Images: StaticImageData,
}

export async function getRecipePosts(
    category: string = "",
    order: "recommend" | "new" | "view" = "recommend") {
    const res = await fetch(
        `http://localhost:9090/api/food?category=${category}&order=${order}`,
        {
            next: {
                tags: ["recipe", "posts"]
            },
            cache: "no-store"
        });
    if (!res.ok) {
        throw new Error("Failed to getRecipePosts");
    }
    console.log("category", category);
    return res.json();
}
