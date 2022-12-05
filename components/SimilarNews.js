// a card with image and then text and then left side author image and name and date at the right side
import Image from "next/image"
import htmlCssURL from "../public/html-css.png"
import dpImage from "../public/man.jpeg"
import uiuxImage from "../public/UXUI.png"
import laptopImage from "../public/high.png"

const NewsCard = ({ image, text, author, date }) => {
	return (
		<div className='card'>
			<Image
				src={image}
				alt={author?.toString()}
				className='card-img-top'
				style={{ objectFit: "cover", height: "250px" }}
			/>
			<div className='card-body'>
				<p className='card-text text-bold'>
					<strong>{text}</strong>
				</p>
			</div>
			<div>
				<div className='row p-2 px-3'>
					<div className='col-md-6 d-flex align-item-center'>
						<Image src={dpImage} alt='displayPicture' className='rounded-circle' width='25' height='25' />
						<div style={{ width: "10px" }} />
						<p>{author}</p>
					</div>
					<div className='col-md-6 text-end'>
						<p className='small text-gray'>{date}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export const SimilarNews = () => {
	return (
		<div className='container my-5'>
			<div className='row'>
				{news.map((item, index) => (
					<div className='col-md-4' key={index}>
						<NewsCard image={item.image} text={item.text} author={item.author} date={item.date} />
					</div>
				))}
			</div>
		</div>
	)
}

const news = [
	{
		image: laptopImage,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor.",
		author: "Josh Mila",
		date: "2021-01-01",
	},
	{
		image: htmlCssURL,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor.",
		author: "Milab njmm",
		date: "2021-01-01",
	},
	{
		image: uiuxImage,
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor.",
		author: "Josh Mila",
		date: "2021-01-01",
	},
]
