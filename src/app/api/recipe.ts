export interface Recipe {
    postId: number,
    title: string,
    user: string,
    imageSrc: string,
    views:number,
    createdAt:string,
    nextPage:number
}
type getRecipePostsProps ={
    queryKey:[string,string, { category:string|string[],order:string,searchText:string }],
    pageParam:number
}
type getTotalCountProps ={
    queryKey:[string,string, { category:string|string[],order:string,searchText:string }],
}
const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
export async function getRecipePosts(
    {queryKey,pageParam}:getRecipePostsProps,

    )
{
    const[_key1,_key2,{category,order,searchText}]=queryKey;
    const res = await fetch(
        `${BaseUrl}/food?category=${category}&order=${order}&searchText=${searchText}&cursor=${pageParam}`,
        {
            method:'GET',
            next: {
                tags: ["recipe", "posts",category as string,order,searchText]
            },
            cache: "no-store"
        })
    if (!res.ok) {
        console.error("Error fetching data:", res.statusText);
        throw new Error("Failed to getRecipePosts");
    }
    return res.json();
}

export async function getTotalCount(
    {queryKey}:getTotalCountProps,
)
{
    const[_key1,_key2,{category,order,searchText}]=queryKey;
    const res = await fetch(
        `${BaseUrl}/count?category=${category}&order=${order}&searchText=${searchText}`,
        {
            method:'GET',
            next: {
                tags: ["recipe", "count",category as string,order,searchText]
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
        `${BaseUrl}/createFood`,
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
        throw new Error("Failed to createRecipe");
    }
    return res.json();
}
export async function getRecipeDetail(postId: string) {
    const res = await fetch(
        `${BaseUrl}/food/detail?postId=${postId}`,
        {
            method:'GET',
            next: {
                tags: ["recipe", "detail"]
            },
            cache: "no-store"
        })
    if (!res.ok) {
        console.error("Error fetching data:", res.statusText);
        throw new Error("Failed to getRecipeDetail");
    }
    return res.json();
}

export async function increaseViewCount(postId: string) {
    const res = await fetch(
        `${BaseUrl}/increaseViewCount?postId=${postId}`,
        {
            method:'PATCH',
            next: {
                tags: ["increase", "views"]
            },
            cache: "no-store"
        })
    if (!res.ok) {
        console.error("Error fetching data:", res.statusText);
        throw new Error("Failed to getRecipeDetail");
    }
    return res.json();
}
