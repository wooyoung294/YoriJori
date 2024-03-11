'use client'

import React from 'react';
import styles from "@/app/(afterWellcome)/_components/profile.module.css";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import KakaoLoginBtn from "@/app/(afterWellcome)/_components/KakaoLoginBtn";
import Link from "next/link";

function Profile() {
    const {data:user} = useSession()
    const router = useRouter();
    const onLogOut = ()=>{
        signOut({redirect:false})
            .then(()=>router.replace('/'));
    }
    if(!user){
        return(
            <div className={styles.topRightWrapper}>
                <span className={styles.wellcomeText}>환영합니다!</span>
                <div>
                    <KakaoLoginBtn/>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.topRightWrapper}>
            <div>
                <span className={styles.wellcomeText}>{user.user?.name}님 환영합니다!</span>
                &nbsp;
                <button className={styles.logOutBtn} onClick={onLogOut}>LogOut</button>
            </div>

            <Link href={'/createRecipe'}>
                <button className={styles.createRecipeBtn} >나만의 레시피 등록하기</button>
            </Link>
        </div>

    );
}

export default Profile;
