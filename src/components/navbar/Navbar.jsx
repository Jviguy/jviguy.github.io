'use client'

import Link from "next/link";
import styles from "./navbar.module.css"
import {useSession, signOut} from "next-auth/react";
import {usePathname} from "next/navigation";
import {Suspense} from "react";

const links = [
    "Blog", "Portfolio", "Contact"
]


const Navbar = () => {
    const {data,status} =  useSession()
    const path = usePathname();
    if (status === "loading") return (<Suspense>
        <div className={styles.container}>
            <Link className={styles.emoji} href="/">🏠</Link>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link className={styles.link}  key={index} href={link.toLowerCase()}>{link}</Link>
                ))}
                <button className={styles.login}>Sign</button>
            </div>
        </div>
    </Suspense>);
    return (
        <div className={styles.container}>
            <Link className={styles.emoji} href="/">🏠</Link>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link className={styles.link}  key={index} href={link.toLowerCase()}>{link}</Link>
                ))}
                { status === "unauthenticated" ?
                    <Link href={"/auth/login?redirect="+path} className={styles.login}>Sign In</Link> : <button className={styles.login} onClick={()=>signOut()}>Sign Out</button>
                }
            </div>
        </div>
    )
}

export default Navbar;