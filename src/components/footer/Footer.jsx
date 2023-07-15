import styles from "./footer.module.css"
import Link from "next/link";
import Image from "next/image";

const links = [
    "About","Portfolio","Contact"
]

const Footer = () => {
    return (
        <div className={styles.container}>
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
                <Link href="https://twitter.com/jviguy" rel="noopener noreferrer" target="_blank">
                    <Image src="twitter.svg" width="25" height="25" alt=""/>
                </Link>
                <Link href="https://www.linkedin.com/in/jeremy-ianne-5a3621201/" rel="noopener noreferrer" target="_blank">
                    <Image src="linked.svg" width="25" height="25" alt=""/>
                </Link>
                <Link href="https://www.instagram.com/jviguy06/" rel="noopener noreferrer" target="_blank">
                    <Image src="insta.svg" width="25" height="25" alt=""/>
                </Link>
                <Link href="mailto:jviguytwo2@gmail.com" rel="noopener noreferrer" target="_blank">
                    <Image src="gmail.svg" width="25" height="25" alt=""/>
                </Link>
                <Link href="https://github.com/Jviguy" rel="noopener noreferrer" target="_blank">
                    <Image src="github.svg" width="25" height="25" alt=""/>
                </Link>
            </div>
        </div>
    )
}

export default Footer;