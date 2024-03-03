import React from 'react';
import styles from "./page.module.css"
import {BackgroundBeams} from "@/components/ui/background-beams";
import Link from "next/link";
import Image from "next/image";

const Page = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Need a project created?
        </h1>
        <div className={styles.cards}>
          <div className={styles.cardCont}>
            Reach out to me over email at jviguytwo2@gmail.com
            <div className={styles.socialHolder}>
              <Link href="mailto:jviguytwo2@gmail.com" rel="noopener noreferrer" target="_blank">
                <Image src="https://jviguy.vercel.app/gmail.svg" fill={true} alt=""/>
              </Link>
            </div>
          </div>
          <div>

          </div>
        </div>
      <BackgroundBeams/>
    </div>
);

export default Page;