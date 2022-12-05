import Image from "next/image"
import styles from "../styles/Home.module.css"

export const ImageWithParagraphs = ({ imgURL, firstText, secondText, style }) => {
	return (
		<div className={styles.midContainer} style={style}>
			<Image src={imgURL} alt='alt' style={{ width: "100%", height: "50%", margin: "0" }} />

			<div className={styles.smallContainer}>
				<p className='m-4'>{firstText}</p>
				<p className='m-4'>{secondText}</p>
			</div>
		</div>
	)
}
