import React from 'react';
import styles from './page.module.css';
import {NotFound} from "next/dist/client/components/error";
import Image from "next/image";
async function retrieveBlogPost(id) {
	const response = await fetch(`https://jviguy.vercel.app/api/posts/${id}`)
	if (!response.ok) return NotFound();
	return response.json();
}
const Page = async ({params}) => {
	const data = await retrieveBlogPost(params.id);
	return (
		<div>
			<h1>{data.title}</h1>
			<Image src={data.image} width="500" height="500" alt=""></Image>
			<p>{data.content}</p>
		</div>
	)
}

export default Page;