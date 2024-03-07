'use client'
import React, {MouseEventHandler} from 'react';
import styles from './anonymousLoginBtn.module.css'
import {useRouter} from "next/navigation";
function AnonymousLoginBtn() {
    const router = useRouter()
    const anonymousLogin:MouseEventHandler<HTMLButtonElement> = ()=> {
        router.push('/home');
    }
    return (
        <button className={styles.anonymousLoginBtn} onClick={anonymousLogin}>비회원 로그인</button>
    );
}

export default AnonymousLoginBtn;