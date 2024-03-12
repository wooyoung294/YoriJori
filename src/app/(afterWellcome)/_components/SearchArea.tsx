"use client";
import React, { useRef } from "react";
import styles from "@/app/(afterWellcome)/_components/searchArea.module.css";
import { useSearchTextStore } from "@/app/(afterWellcome)/_store/zustandStore";

function SearchArea() {

    const {
        searchInputValue,
        onChangeSearchInputValue,
        onChangeSearchText
    } = useSearchTextStore();
    const searchTextInput = useRef<HTMLInputElement>(null);
    const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (!searchTextInput.current?.value) {
            alert("검색어를 입렵해주세요");
            searchTextInput.current?.focus();
        } else {
            onChangeSearchText(searchTextInput.current?.value)
        }

    };

    return (
        <div  className={styles.searchWrapper}>
            <input className={styles.searchInput}
                   name="searchText"
                   type="text"
                   value={searchInputValue}
                   onChange={(e)=>onChangeSearchInputValue(e)}
                   ref={searchTextInput}
            />
            <button className={styles.searchBtn} onClick={onClick}>검색</button>
        </div>
    );
}

export default SearchArea;
