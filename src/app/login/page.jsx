'use client';
import React from 'react';
import styles from "./page.module.css"
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {ErrorModal} from "@/components/ErrorModal/ErrorModal";

const Page = () => {
    const searchParams = useSearchParams();
    const redir = searchParams.get('redirect') ?? "/";
    const error = searchParams.get('error');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        signIn("credentials", {email, password, callbackUrl: redir});
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Sign In
            </h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="email" placeholder="email" className={styles.input}></input>
                <input type="password" placeholder="password" className={styles.input}></input>
                <button className={styles.button} type="submit">Sign In</button>
            </form>
            <Link href={"/auth/register?redirect="+redir} className={styles.link}>Don&apos;t have an account?</Link>
            <div className={styles.socials}>
                <div className={styles.socialHolder}>
                    <button onClick={()=>signIn("github", {callbackUrl: redir})}>
                        <Image src="https://jviguy.vercel.app/github.svg" fill={true} alt=""/>
                    </button>
                </div>
                <div className={styles.socialHolder}>
                    <button onClick={()=>signIn("google", {callbackUrl: redir})}>
                        <Image src="https://jviguy.vercel.app/google.svg" fill={true} alt=""/>
                    </button>
                </div>
            </div>
            {error&&
                <ErrorModal message={error}/>
            }
        </div>
    )
};

export default Page;