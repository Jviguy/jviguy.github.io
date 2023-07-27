'use client';
import React from 'react';
import styles from "./page.module.css"
import {signIn} from "next-auth/react";
import {redirect, useSearchParams} from "next/navigation";

const Page = () => {
    const searchParams = useSearchParams();
    const redir = searchParams.get('redirect');
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Login
            </h1>
            <button onClick={()=>signIn("google", {callbackUrl: redir})}>Login with google.</button>
            <button onClick={()=>signIn("github", {callbackUrl: redir})}>Login with github.</button>
        </div>
    )
};

export default Page;