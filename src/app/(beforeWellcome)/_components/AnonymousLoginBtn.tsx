'use client'
import React, {MouseEventHandler} from 'react';
import styles from './anonymousLoginBtn.module.css'
import {useRouter} from "next/navigation";
import Image from "next/image";
import person from "../../../../public/etcImg/person-x-fill.svg"
function AnonymousLoginBtn() {
    const router = useRouter()
    const anonymousLogin:MouseEventHandler<HTMLButtonElement> = ()=> {
        router.push('/home');
    }
    return (
        <button className={styles.anonymousLoginBtn} onClick={anonymousLogin}>
            <Image className={styles.anonymousLoginBtnImg} src={person} alt="Kakao logo" width={20} height={20}/>
            비회원 로그인
        </button>
    );
}

export default AnonymousLoginBtn;
