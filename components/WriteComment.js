// a text area to write a comment having placeholder your message...
// a heading and a sub heading
// a text with an icon of infp
// a send button in the middle

import Image from "next/image"
import { infoURL } from "../assets/svgs"
// styles
import styles from "../styles/Home.module.css"

export const WriteComment = () => {
	return (
		<section className={styles.xsContainer + " text-center"}>
			<h4>Write your Comment</h4>
			<p className='small'>
				<span className='mr-2'>
					<Image src={infoURL} alt='user' className='mb-1' />
				</span>
				For Sending messages you must to Sign Up
			</p>
			<div className='row'>
				<div className='col-md-12 align-self-center'>
					{/* bootstrap text area */}

					<textarea
						className='form-control'
						rows='8'
						placeholder='Your message...'
						style={{ backgroundColor: "#f5f5f5" }}
					/>
					<button className='btn btn-secondary mt-3'>Send Comment</button>
				</div>
			</div>
		</section>
	)
}
