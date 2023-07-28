'use client';
import React, {useState} from 'react';
import styles from "./page.module.css"
import {signIn} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {ErrorModal} from "@/components/ErrorModal/ErrorModal";

const Page = () => {
    const searchParams = useSearchParams();
    let redir = searchParams.get('redirect');
    redir = "/auth/login?redirect=" + redir;
    const [err, setErr] = useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmation = e.target[3].value;
        if (confirmation !== password) {
            setErr("Passwords must match.")
            return;
        }
        try {
            const response = await fetch("/api/auth/register",
                {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,email,password
                    })
                }
            );
            if (response.status === 201) router.push(redir);
        } catch (err) {
            //TODO: IMPLEMENT POPUP SAYING ERROR OCCURED
            setErr(true);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Register
            </h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="username" className={styles.input}></input>
                <input type="email" placeholder="email" className={styles.input}></input>
                <input type="password" placeholder="password" className={styles.input}></input>
                <input type="password" placeholder="confirm password" className={styles.input}></input>
                <button className={styles.button} type="submit">Register</button>
            </form>
            <Link href={"/auth/login?redirect="+redir} className={styles.link}>Already have an account?</Link>
            <div className={styles.socials}>
                <div className={styles.socialHolder}>
                    <button onClick={()=>signIn('github', {callbackUrl: redir})}>
                        <Image src="https://jviguy.vercel.app/github.svg" fill={true} alt=""/>
                    </button>
                </div>
                <div className={styles.socialHolder}>
                    <button onClick={()=>signIn('google', {callbackUrl: redir})}>
                        <Image src="https://jviguy.vercel.app/google.svg" fill={true} alt=""/>
                    </button>
                </div>
            </div>
            {err!==""&&<ErrorModal message={err}></ErrorModal>}
        </div>
    )
};

export default Page;