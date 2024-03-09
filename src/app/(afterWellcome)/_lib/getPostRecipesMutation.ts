import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getRecipePosts, Recipe } from "@/app/api/recipe";
import { useParams } from "next/navigation";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";

type Order = "recommend" | "new" | "view";

function useRecipePosts() {

    const queryClient = useQueryClient();
    const params = useParams();
    const {category} = params;
    const {searchText} = useSearchTextStore();

    const onSuccess = (data: Recipe[]) => {
        queryClient.setQueryData(["recipe", "posts"], data);
        // router.push(`${path}?order=recommend`)
    };

    //useMutation <TData,TError,TVariables,TContext>
    const { mutate: getRecipePostsMutation } = useMutation<Recipe[], unknown, Order>({
        mutationFn: (order: Order) => getRecipePosts(category as string, order, searchText),
        onSuccess,
    });
    return { getRecipePostsMutation: getRecipePostsMutation}
}

export default useRecipePosts;
