import React from "react";
import styles from '@/app/(afterWellcome)/layout.module.css';
import all from "../../../public/recipetype/all.png";
import main from "../../../public/recipetype/main.png";
import sub from "../../../public/recipetype/sub.png";
import rice from "../../../public/recipetype/rice.png";
import pasta from "../../../public/recipetype/pasta.png";
import soup from "../../../public/recipetype/soup.png";
import logo from "../../../public/logo.png";
import RecipeTypeItem from "@/app/(afterWellcome)/_components/RecipeTypeItem";
import SearchArea from "@/app/(afterWellcome)/_components/SearchArea";
import Image from "next/image";
import Profile from "@/app/(afterWellcome)/_components/Profile";
type recipeTypeItem ={
    url:string,
    imageSrc:File,
    label:string
}
const recipeTypeItems:recipeTypeItem[] = [
    {url:'/home',imageSrc:all,label:'전체'},
    {url:'/main',imageSrc:main,label:'메인반찬'},
    {url:'/sub',imageSrc:sub,label:'밑반찬'},
    {url:'/soup',imageSrc:soup,label:'찌개/국'},
    {url:'/rice',imageSrc:rice,label:'밥'},
    {url:'/pasta',imageSrc:pasta,label:'면'},
]
export default function Layout({children,}: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <header className={styles.topSection}>
                <div className={styles.logoWrapper}>
                    <Image className={styles.logo} src={logo} priority={'empty'} alt={'logo'}/>
                </div>
                <div className={styles.topSearchSection}>
                    <SearchArea/>
                    <div className={styles.recipeTypeWrapper}>
                        {recipeTypeItems.map((item)=> <RecipeTypeItem item={item} key={item.url}/>)}
                    </div>
                </div>
                <Profile/>
            </header>
            <div className={styles.bottomSectionWrapper}>
                {children}
            </div>

        </div>
    );
}
