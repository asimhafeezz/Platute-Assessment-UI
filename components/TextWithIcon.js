import Image from "next/image"
import { threeDots } from "../assets/svgs"
import styles from "../styles/Home.module.css"

export const TextWithIcon = ({ icon, text, heading, small = false }) => {
	return (
		<section className={!small ? styles.midContainer : styles.smallContainer}>
			<div className={styles.textWithIconWrapper}>
				<div className='row'>
					<div className='col-md-2 col-sm-12 align-self-center'>{icon}</div>
					<div className='col-md-10 col-sm-12 align-self-center'>
						<h4>{heading}</h4>
						<span className='small'>{text}</span>
						<br />
						<Image src={threeDots} alt='threeDots' />
					</div>
				</div>
			</div>
		</section>
	)
}
