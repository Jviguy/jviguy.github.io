import React from 'react';
import {NotFound} from "next/dist/client/components/error";
import styles from "./page.module.css"

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
		</div>
	)
}

export default Page;