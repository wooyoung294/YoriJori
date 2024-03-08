'use client'
import React, {MouseEventHandler} from 'react';
import kakao from '../../../../public/kakao/kakao_login_medium_narrow.png'
import Image from "next/image";
import styles from './kakaoLoginBtn.module.css'
import {signIn, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
function KakaoLoginBtn() {

    const{data:session} = useSession();
    if (session?.user?.name) {
        redirect('/home');
        return null;
    }

    const login:MouseEventHandler<HTMLImageElement> = ()=>{
        signIn('kakao')
    }
    return (
        <Image className={styles.KakaoLoginBtn} src={kakao} alt='KakaoLogin' priority onClick={login}/>
    );
}

export default KakaoLoginBtn;
