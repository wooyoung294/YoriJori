'use client'
import styles from '@/app/(beforeWellcome)/page.module.css'
import {MouseEventHandler} from "react";
import {signIn, useSession} from "next-auth/react";
import {redirect} from "next/navigation";

export default function Home() {
    //TODO: 버튼 Client로 변경후 Home Server로 변경
    const{data:session} = useSession();
    if (session?.user.name) {
        redirect('/home');
        return null;
    }
    const login:MouseEventHandler<HTMLButtonElement> = ()=>{
        signIn()
    }

    return (
        <main className={styles.container}>
            <div>
                <button onClick={login}>Search Recipes!</button>
            </div>
        </main>
    );
}
