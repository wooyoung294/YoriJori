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
