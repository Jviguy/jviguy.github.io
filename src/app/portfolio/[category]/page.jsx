import React from 'react';
import {NotFound} from "next/dist/client/components/error";
import styles from "./page.module.css"

async function retrieveProjects(category) {
	const response = await fetch(`https://jviguy.vercel.app/api/projects/${category}`)
	if (!response.ok) return NotFound();
	return response.json();
}

const Page = async ({params}) => {
	const data = await retrieveProjects(params.category);
	if (React.isValidElement(data)) return data
	return (
		<div className={styles.container}>
			{data.map(project=>{
				return (
					<div key={project.title} className={styles.project}>
						<h1 className={styles.title}>{project.title}</h1>
					</div>
				)
			})}
		</div>
	)
}

export default Page;