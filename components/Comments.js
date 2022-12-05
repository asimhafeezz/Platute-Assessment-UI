import { Comment } from "./Comment"
import styles from "../styles/Home.module.css"

export const Comments = () => {
	return (
		<div className={styles.midContainer}>
			<h3 className='text-center mt-5'>Comments</h3>
			{comments.map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
		</div>
	)
}

const comments = [
	{
		id: 1,
		name: "John Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		date: "2021-01-01",
	},
	{
		id: 2,
		name: "Jane Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		date: "2021-01-01",
	},
	{
		id: 3,
		name: "John Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		date: "2021-01-01",
	},
]
