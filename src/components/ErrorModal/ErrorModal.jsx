import styles from "./ErrorModal.module.css"
import Image from "next/image";

export const ErrorModal = (props) => {
	let message = props.message;
	return (
		<div className={styles.container}>
			<Image width="35" height="35" src="/icons/alert-circle.svg" alt=""/>
			<h3>{message}</h3>
		</div>
	)
}