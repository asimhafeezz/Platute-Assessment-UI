import styles from "../styles/Home.module.css"
export const ListTextRow = () => {
	return (
		<div className={styles.smallContainer}>
			<div className={styles.smallContainer}>
				<div className='row m-3'>
					<div className='col-md-6 col-sm-12'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl
							aliquam mauris, eget aliquam nisl nunc vel mauris. Sed euismod, nunc ut aliquam tincidunt, nisl nisl
							aliquam mauris, eget aliquam nisl nunc vel mauris. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.
							Sed euismod, nunc ut aliquam tincidunt, nisl nisl aliquam mauris, eget aliquam nisl nunc vel mauris.
						</p>
					</div>
					<div className={"col-md-6 col-sm-12"}>
						<section className={styles.grayCard}>
							{/* ul bullet list of 4. With light gray background*/}
							<ul>
								<li className='mb-2'>Cras justo odio, Cras justo odio, Cras justo odio,Cras justo odio</li>
								<li className='mb-2'>Dapibus ac facilisis in, Dapibus ac facilisis in, Dapibus ac facilisis in</li>
								<li className='mb-2'>
									Morbi leo risus, Morbi leo risus. Morbi leo risus. Morbi leo risus. Morbi leo risus
								</li>
								<li className='mb-2'>Porta ac consectetur ac. Porta ac consectetur ac, Porta ac consectetur ac.</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}
