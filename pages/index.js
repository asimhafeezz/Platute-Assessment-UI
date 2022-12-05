import Head from "next/head"

import Image from "next/image"
import styles from "../styles/Home.module.css"

import headImage from "../public/head-image.jpg"
import videoImage from "../public/video.png"
import { Comments, ImageWithParagraphs, SimilarNews, TextWithIcon, WriteComment } from "../components"
import { searchIcon } from "../assets/svgs"
import { Layout } from "../common"
import { ListTextRow } from "../components/ListTextRow"

export default function Home() {
	return (
		<Layout>
			<div className={styles.container}>
				<Head>
					<title>Blog</title>
					<meta name='description' content='A Blog Post Page' />
					<link rel='icon' href='/favicon.ico' />
				</Head>

				{/* Heading */}
				<div className={styles.smallContainer}>
					<h3 className='m-4'>
						With Platute, you are in charge of your schedule which means you can get the help you want, when you need
						it.
					</h3>
				</div>

				{/* Image with Paragraphs */}
				<ImageWithParagraphs
					imgURL={headImage}
					firstText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.'
					secondText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.'
				/>

				{/* List Text Row */}
				<ListTextRow />

				{/* text with icon */}
				<TextWithIcon
					icon={<Image src={searchIcon} alt='12' />}
					heading={"About Platute"}
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl
        nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl
        nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.'
				/>

				{/* image with paragraphs */}
				<ImageWithParagraphs
					imgURL={videoImage}
					firstText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.'
					secondText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris.'
					style={{ marginTop: "20px" }}
				/>

				{/* text with icon */}
				<section className='container'>
					<TextWithIcon
						icon={<Image src={searchIcon} alt='12' />}
						heading={"Did you know?"}
						text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl'
						small={true}
					/>
				</section>

				{/* Comments */}
				<Comments />

				{/* Write a comment */}
				<WriteComment />

				{/* Similar news */}
				<SimilarNews />
			</div>
		</Layout>
	)
}
