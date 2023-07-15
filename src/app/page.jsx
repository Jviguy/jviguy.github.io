import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>
              Software Engineering made easy
          </h1>
          <Image src="/me.jpg" alt="" width={200} height={200} className={styles.pfp}/>
          <p className={styles.info}>
              Hello, I am Jeremy Ianne a 17 year old professional Software Engineer.
              I have many years of experience in web, mobile/desktop app and game development.
              I have also studied Cybersecurity, Cloud Infrastructure and Systems Administration on my own and used them in my own projects.
              I am currently enrolled at York Technical college studying Cybersecurity.
              I have been employed at a Code Ninjas branch for around 3 years teaching the Unity Game Engine.
              My most recent endeavour is interning at the Kashmir World Foundation.
          </p>
          <Link href="portfolio">
              <button className={styles.button}>
                  <h3 className={styles.info}>View My Works</h3>
              </button>
          </Link>
      </div>
  )
}
