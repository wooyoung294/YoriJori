import { StaticImageData } from "next/image";

export interface Recipe {
    postId: number,
    title: string,
    user: string,
    imageSrc: string,
    views:number,
    createdAt:string
}

export async function getRecipePosts(
    category: string = "home",
    order: "recommend" | "new" | "view" = "recommend",
    searchText:string = ""
    )
{
    const res = await fetch(
        `http://localhost:8080/api/food?category=${category}&order=${order}&searchText=${searchText}`,
        {
            method:'GET',
            next: {
                tags: ["recipe", "posts"]
            },
            cache: "no-store"
        })
    if (!res.ok) {
        console.error("Error fetching data:", res.statusText);
        throw new Error("Failed to getRecipePosts");
    }
    return res.json();
}
export async function createRecipe(formData:FormData)
{
    const res = await fetch(
        `http://localhost:8080/api/createFood`,
        {
            method:'POST',
            body:formData,
            next: {
                tags: ["recipe", "create"]
            },
            cache: "no-store"
        })
    if (!res.ok) {
        console.error("Error fetching data:", res.statusText);
        throw new Error("Failed to getRecipePosts");
    }
    return res.json();
}
