'use client'

import styles from './sidebar.module.css'
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import { CSSTransition } from "react-transition-group";
import {signOut} from "next-auth/react";

export const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open);
    }
    return (
        <div className={open?styles.container:styles.containerClosed}>
            <button className={styles.entry} onClick={toggleMenu}>
                <div className={styles.icoHolder}>
                    <Image src={`/icons/chevrons-${!open?"right":"left"}.svg`} alt="close" fill={true}></Image>
                </div>
                <CSSTransition
                    in={open}
                    timeout={500}
                    classNames='fade'
                    unmountOnExit
                >
                    <h4 className={styles.texttransition}>Close</h4>
                </CSSTransition>
            </button>
            <button className={styles.entry}>
                <Link className={styles.icoHolder} href={"/dashboard/blog"}>
                    <Image src="/icons/mail.svg" alt="sign out" fill={true}></Image>
                </Link>
                <CSSTransition
                    in={open}
                    timeout={500}
                    classNames='fade'
                    unmountOnExit
                >
                    <h4 className={styles.texttransition}>Handle Blog</h4>
                </CSSTransition>
            </button>
            <button className={styles.entry}>
                <Link className={styles.icoHolder} href={"/dashboard/portfolio"}>
                    <Image src="/icons/archive.svg" alt="sign out" fill={true}></Image>
                </Link>
                <CSSTransition
                    in={open}
                    timeout={500}
                    classNames='fade'
                    unmountOnExit
                >
                    <h4 className={styles.texttransition}>Handle Portfolio</h4>
                </CSSTransition>
            </button>
            <button className={styles.entry}>
                <div className={styles.icoHolder}>
                    <Image src="/icons/log-out.svg" alt="sign out" fill={true} onClick={()=>signOut({callbackUrl: "/"})}></Image>
                </div>
                <CSSTransition
                    in={open}
                    timeout={500}
                    classNames='fade'
                    unmountOnExit
                >
                    <h4 className={styles.texttransition}>Sign Out</h4>
                </CSSTransition>
            </button>
        </div>
    )
}