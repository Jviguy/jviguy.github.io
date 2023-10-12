import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>
              Jeremy Ianne
          </h1>
          <div className={styles.center}>
              <div className={styles.titles}>
                <h2>Software Engineer and Cybersecurity Hobbyist</h2>
              </div>
              <div className={styles.centerItem}>
                  <p className={styles.info}>
                      Hello! I&apos;m a 17 year old professional Software Engineer.
                      I have many years of experience in web, mobile/desktop app and game development.
                      I have also studied Cybersecurity, Cloud Infrastructure and Systems Administration on my own and used them in my own projects.
                      I am currently enrolled at York Technical college studying Cybersecurity.
                      I have been employed at a Code Ninjas branch for around 2 years teaching the Unity Game Engine.
                      My most recent endeavour is interning at the Kashmir World Foundation.
                  </p>
                  <Image src="/me.jpg" alt="" width={600} height={600} priority={true} objectFit={"cover"} unoptimized={true} className={styles.pfp}/>
              </div>
              <Link href="portfolio">
                  <button className={styles.button}>
                      <h3 className={styles.info}>View My Works</h3>
                  </button>
              </Link>
          </div>
      </div>
  )
}
