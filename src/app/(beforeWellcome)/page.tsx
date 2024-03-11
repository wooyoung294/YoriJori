'use client'
import styles from '@/app/(beforeWellcome)/page.module.css'
import KakaoLoginBtn from "@/app/(beforeWellcome)/_components/KakaoLoginBtn";
import AnonymousLoginBtn from "@/app/(beforeWellcome)/_components/AnonymousLoginBtn";
import LoginAnimation from "@/app/(beforeWellcome)/_components/LoginAnimation";

export default function Home() {
    return (
        <main className={styles.container}>
            <LoginAnimation/>

        </main>
    );
}
