import { create } from "zustand";
import React from "react";
type searchTextStoreType = {
    searchText:string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
export const useSearchTextStore = create<searchTextStoreType>((set)=>({
    searchText: '',
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>
        set(() => ({searchText:e.currentTarget.value}))
}))
type createRecipeModalStoreType = {
    active:boolean,
    handledOpen:React.MouseEventHandler<HTMLButtonElement>,
    handledClose:React.MouseEventHandler<HTMLButtonElement>,
}
export const useCreateRecipeModalStore = create<createRecipeModalStoreType>((set)=>({
    active: false,
    handledOpen: ()=> set(() => ({active:true})),
    handledClose: ()=> set(() => ({active:false}))
}))
