import { create } from "zustand";
import React from "react";
type searchTextStoreType = {
    searchText:string,
    onChangeSearchText: React.ChangeEventHandler<HTMLInputElement>,
    order:"recommend" | "new" | "view",
    onChangeOrder:Function
    setInitValue: Function,
}
export const useSearchTextStore = create<searchTextStoreType>((set)=>({
    searchText: '',
    onChangeSearchText: (e:React.ChangeEvent<HTMLInputElement>)=>
        set(() => ({searchText:e.currentTarget.value})),
    order:"recommend",
    onChangeOrder:(value:"recommend" | "new" | "view")=>
        set(() => ({order:value})),
    setInitValue:()=>{
        set(()=>({order:"recommend",searchText:''}))
    }
}))
