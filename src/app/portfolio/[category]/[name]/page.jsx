import React from 'react';
import {NotFound} from "next/dist/client/components/error";
import styles from "./page.module.css"

async function retrieveProjects(category, name) {
	const response = await fetch(`https://jviguy.vercel.app/api/projects/${category}/${name}`)
	if (!response.ok) return NotFound();
	return response.json();
}

const Page = async ({params}) => {
	const data = await retrieveProjects(params.category, params.name);
	if (React.isValidElement(data)) return data
	return (
		<div className={styles.container}>
			<div key={project.title} className={styles.project}>
				<h1 className={styles.title}>{project.title}</h1>
			</div>
		</div>
	)
}

export default Page;