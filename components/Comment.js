// a comment component that displays the comment and the author displat picture
// and the author name
// the component also has a right aligned heart icon that can be clicked to like the comment and an info icon that can be clicked to display the comment info
// and a date the comment was posted on

import Image from "next/image"
import { infoURL, redHeartURL } from "../assets/svgs"
import dpImage from "../public/man.jpeg"
import styles from "../styles/Home.module.css"

export const Comment = ({ comment }) => {
	return (
		<section className={styles.smallContainer}>
			<div className='row my-5'>
				<div className='col-md-1 col-sm-12 align-self-center'>
					<Image src={dpImage} alt='displayPicture' className='rounded-circle' width='50' height='50' />
				</div>
				<div className='col-md-11 col-sm-12 align-self-center'>
					<div className='row'>
						<div className='col-md-11 col-sm-11 col-11'>
							<h6 className='m-0'>{comment.name}</h6>
							<span className='small'>{comment.text}</span>
						</div>
						<div className='col-md-1 col-sm-1 col-1'>
							<div className='row'>
								<div className='col-md-6'>
									<Image src={redHeartURL} alt='red-heart' />
								</div>
								<div className='col-md-6'>
									<Image src={infoURL} alt='gray-heart' />
								</div>
							</div>
						</div>
					</div>
					<span className='small text-gray mt-5'>{comment.date}</span>
				</div>
			</div>
		</section>
	)
}
