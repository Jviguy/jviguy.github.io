import React from 'react';
import {NotFound} from "next/dist/client/components/error";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";

async function retrieveProject(category, name) {
	const response = await fetch(`https://jviguy.vercel.app/api/projects/${category}/${name}`, { next: { revalidate: 10 } })
	if (!response.ok) return NotFound();
	return response.json();
}

const Page = async ({params}) => {
	const project = await retrieveProject(params.category, params.name);
	if (React.isValidElement(project)) return project
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{project.title}</h1>
			<div className={styles.rowContainer}>
				<div className={styles.colContainer}>
					<h2 className={styles.headers}>About This Project</h2>
					<p className={styles.article}>{project.article}</p>
					<h2 className={styles.headers}>Technologies Used</h2>
					<div className={styles.techCardsHolder}>
						{project.techs.map(tech=><h4 className={styles.techCard} key={tech}>{tech}</h4>)}
					</div>
				</div>

				<div className={styles.colContainer}>
					<div className={styles.imgHolder}>
						<Image src={project.image} alt="" fill={true}></Image>
					</div>
					{project.deployment !== "" &&
						// if project has a deployment
						<>
							<Link className={styles.link} href={project.deployment}>
								<Image alt="github" src="/icons/globe.svg" width={25} height={25}/>
								View Deployment
							</Link>
						</>
					}
					{project.github !== "" &&
						// if project is open source
						<>
							<Link href={project.github} className={styles.link}>
								<Image alt="github" src="/icons/github.svg" width={25} height={25}/>
								View Source
							</Link>
						</>
					}
				</div>
			</div>
		</div>
	)
}

export default Page;