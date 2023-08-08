'use client'

import Link from "next/link";
import styles from "./navbar.module.css"
import {useSession, signOut} from "next-auth/react";
import {usePathname} from "next/navigation";
import {Suspense} from "react";

const links = [
    "Blog", "Portfolio", "Contact", "Dashboard"
]


const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.emoji} href="/">🏠</Link>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link className={styles.link}  key={index} href={"/"+link.toLowerCase()}>{link}</Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar;