"use client";
import React, { useRef } from "react";
import styles from "@/app/(afterWellcome)/_components/searchArea.module.css";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";
import useRecipePosts from "@/app/(afterWellcome)/_lib/getPostRecipesMutation";
import { useRouter } from "next/navigation";

function SearchArea() {

    const {
        searchText,
        onChange
    } = useSearchTextStore();
    const { getRecipePostsMutation } = useRecipePosts();
    const searchTextInput = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!searchText) {
            alert("검색어를 입렵해주세요");
            searchTextInput.current?.focus();
        } else {
            getRecipePostsMutation("recommend");
            router.push(`/search?searchText=${searchText}&order=recommend`);
        }

    };

    return (
        <div className={styles.searchWrapper}>
            <input className={styles.searchInput}
                   name="searchText"
                   type="text"
                   ref={searchTextInput}
                   onChange={(e) => onChange(e)}
            />
            <button className={styles.searchBtn} onClick={onClick}>검색</button>
        </div>
    );
}

export default SearchArea;
