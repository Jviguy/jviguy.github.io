import React from 'react';
import {NotFound} from "next/dist/client/components/error";
import styles from "./page.module.css"

async function retrieveProjects(category) {
	const response = await fetch(`https://jviguy.vercel.app/api/projects/${category}`, { next: { revalidate: 10 } })
	if (!response.ok) return NotFound();
	return response.json();
}

const Page = async ({params}) => {
	let data = await retrieveProjects(params.category)
	if (React.isValidElement(data)) return data
	return (
		<div className={styles.container}>
			{data.map(project=>(
					<div key={project.title} className={styles.project}>
						<h1 className={styles.title}>{project.title}</h1>
						<p>{project.description}</p>
						<button className={styles.viewButton}>See More</button>
					</div>
				)
			)}
		</div>
	)
}

export default Page;