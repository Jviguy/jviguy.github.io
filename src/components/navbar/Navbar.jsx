'use client'

import Link from "next/link";
import styles from "./navbar.module.css"
import {useSession, signOut} from "next-auth/react";
import {usePathname} from "next/navigation";

const links = [
    "Blog", "Portfolio", "Contact"
]


const Navbar = () => {
    const {data,status} =  useSession()
    const path = usePathname();
    return (
        <div className={styles.container}>
            <Link className={styles.emoji} href="/">🏠</Link>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link className={styles.link}  key={index} href={link.toLowerCase()}>{link}</Link>
                ))}
                { status === "unauthenticated" ?
                    <Link href={"/login?redirect="+path} className={styles.login}>Sign In</Link> : <button className={styles.login} onClick={()=>signOut()}>Sign Out</button>
                }
            </div>
        </div>
    )
}

export default Navbar;