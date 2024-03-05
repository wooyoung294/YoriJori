import React from "react";
import styles from '@/app/(afterWellcome)/layout.module.css';
import OrderListItem from "@/app/(afterWellcome)/_components/OrderListItem";
import all from "../../../public/recipetype/all.png";
import main from "../../../public/recipetype/main.png";
import sub from "../../../public/recipetype/sub.png";
import rice from "../../../public/recipetype/rice.png";
import pasta from "../../../public/recipetype/pasta.png";
import soup from "../../../public/recipetype/soup.png";
import RecipeTypeItem from "@/app/(afterWellcome)/_components/RecipeTypeItem";
import SearchArea from "@/app/(afterWellcome)/_components/SearchArea";
import Image from "next/image";

export default function Layout({children,}: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <header className={styles.topSectionWrapper}>
                <section className={styles.topSection}>
                    <div className={styles.topSectionWhiteArea}>
                        <Image className={styles.logo} src={soup} priority={'empty'}/>
                        <div className={styles.topSectionFixed}>
                           <SearchArea/>
                            <div className={styles.recipeTypeWrapper}>
                                <RecipeTypeItem url={'/'} imageSrc={all} label={'전체'}/>
                                <RecipeTypeItem url={'/'} imageSrc={main} label={'메인반찬'}/>
                                <RecipeTypeItem url={'/'} imageSrc={sub} label={'밑반찬'}/>
                                <RecipeTypeItem url={'/'} imageSrc={soup} label={'찌개/국'}/>
                                <RecipeTypeItem url={'/'} imageSrc={rice} label={'밥'}/>
                                <RecipeTypeItem url={'/'} imageSrc={pasta} label={'면'}/>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <div className={styles.bottomSectionWrapper}>
                {children}
            </div>

        </div>
    );
}
