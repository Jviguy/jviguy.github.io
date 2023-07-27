'use client';
import React from 'react';
import styles from "./page.module.css"
import {signIn} from "next-auth/react";

const Page = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Login
        </h1>
        <button onClick={()=>signIn("google")}>Login with google.</button>
        <button onClick={()=>signIn("github")}>Login with github.</button>
    </div>
);

export default Page;