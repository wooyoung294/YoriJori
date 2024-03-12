import { create } from "zustand";
import React from "react";
type searchTextStoreType = {
    searchText:string,
    onChangeSearchText: Function,
    order:"recommend" | "new" | "view",
    onChangeOrder:Function
    setInitValue: Function,
    searchInputValue:string,
    onChangeSearchInputValue: Function,
}
export const useSearchTextStore = create<searchTextStoreType>((set)=>({
    searchText: '',
    onChangeSearchText:(value:string)=>
        set(()=>({searchText:value})),
    order:"recommend",
    onChangeOrder:(value:"recommend" | "new" | "view")=>
        set(() => ({order:value})),
    setInitValue:()=>{
        set(()=>({order:"recommend",searchText:'',searchInputValue:''}))
    },
    searchInputValue:'',
    onChangeSearchInputValue:(e:React.ChangeEvent<HTMLInputElement>)=>
        set(()=>({searchInputValue:e.target.value})),
}))
