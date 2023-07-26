import styles from "./footer.module.css"
import Link from "next/link";
import Image from "next/image";

const links = [
    "Blog","Portfolio","Contact"
]

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.copyright}>
                @2023 Jeremy Ianne. All rights reserved.
            </div>
            <div className={styles.links}>
                <Link className={styles.link} href="/">🏠</Link>
                {links.map((link, index) => (
                    <Link className={styles.link}  key={index} href={link.toLowerCase()}>{link}</Link>
                ))}
            </div>
            <div className={styles.socials}>
                <div className={styles.socialHolder}>
                    <Link href="https://twitter.com/jviguy" rel="noopener noreferrer" target="_blank">
                        <Image src="twitter.svg" fill={true} alt=""/>
                    </Link>
                </div>
                <div className={styles.socialHolder}>
                    <Link href="https://www.linkedin.com/in/jeremy-ianne-5a3621201/" rel="noopener noreferrer" target="_blank">
                        <Image src="linked.svg" fill={true} alt=""/>
                    </Link>
                </div>
                <div className={styles.socialHolder}>
                    <Link href="https://www.instagram.com/jviguy06/" rel="noopener noreferrer" target="_blank">
                        <Image src="insta.svg" fill={true} alt=""/>
                    </Link>
                </div>
                <div className={styles.socialHolder}>
                    <Link href="mailto:jviguytwo2@gmail.com" rel="noopener noreferrer" target="_blank">
                        <Image src="gmail.svg" fill={true} alt=""/>
                    </Link>
                </div>
                <div className={styles.socialHolder}>
                    <Link href="https://github.com/Jviguy" rel="noopener noreferrer" target="_blank">
                        <Image src="github.svg" fill={true} alt=""/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;