import React from 'react';
import styles from "./page.module.css"
import Link from "next/link";
const Page = () => (
    <div className={styles.container}>
        <Link href="/portfolio/personal">
            <div className={styles.categoryContainer}>
                <h1 className={styles.title}>Personal Projects</h1>
            </div>
        </Link>
        <Link href="/portfolio/professional">
            <div className={styles.categoryContainer}>
                <h1 className={styles.title}>Professional Projects</h1>
            </div>
        </Link>
    </div>
);

export default Page;