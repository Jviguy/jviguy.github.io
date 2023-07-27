'use client'

import Link from "next/link";
import styles from "./navbar.module.css"
import {useSession, signOut} from "next-auth/react";

const links = [
    "Blog", "Portfolio", "Contact"
]


const Navbar = () => {
    const {data,status} =  useSession()
    return (
        <div className={styles.container}>
            <Link className={styles.link} href="/">🏠</Link>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link className={styles.link}  key={index} href={link.toLowerCase()}>{link}</Link>
                ))}
                { status === "unauthenticated" ?
                    <Link href="/login" className={styles.login}>Sign In</Link> : <button className={styles.login} onClick={()=>signOut()}>Sign Out</button>
                }
            </div>
        </div>
    )
}

export default Navbar;