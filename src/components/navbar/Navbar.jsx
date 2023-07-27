'use client'

import Link from "next/link";
import styles from "./navbar.module.css"

const links = [
    "Blog", "Portfolio", "Contact", "Login"
]


const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} href="/">🏠</Link>
            <div className={styles.links}>
                {links.map((link, index) => (
                    <Link className={styles.link}  key={index} href={link.toLowerCase()}>{link}</Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar;