'use client';
import React from 'react';
import styles from "./page.module.css"
import {signIn} from "next-auth/react";
import {redirect, useSearchParams} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    const searchParams = useSearchParams();
    const redir = searchParams.get('redirect');
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Register
            </h1>
            <form className={styles.form}>
                <input type="text" placeholder="username" className={styles.input}></input>
                <input type="email" placeholder="email" className={styles.input}></input>
                <input type="password" placeholder="password" className={styles.input}></input>
                <button className={styles.button}>Register</button>
            </form>
            <Link href="/auth/login">Already have an account?</Link>
            <div className={styles.socials}>
                <div className={styles.socialHolder}>
                    <button onClick={()=>signIn('github')}>
                        <Image src="https://jviguy.vercel.app/github.svg" fill={true} alt=""/>
                    </button>
                </div>
                <div className={styles.socialHolder}>
                    <button onClick={()=>signIn('google')}>
                        <Image src="https://jviguy.vercel.app/google.svg" fill={true} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Page;