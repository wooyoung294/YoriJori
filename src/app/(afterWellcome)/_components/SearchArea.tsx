import React from 'react';
import styles from "@/app/(afterWellcome)/_components/searchArea.module.css";
function SearchArea(props) {
    return (
        <div className={styles.searchWrapper}>
            <input className={styles.searchInput} type="text"/>
            <button className={styles.searchBtn}>검색</button>
        </div>
    );
}

export default SearchArea;