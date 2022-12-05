import styles from "../styles/Home.module.css"
import headerImg from "../public/header.png"
import footerImg from "../public/Footer.png"
import Image from "next/image"

export const Layout = ({ children }) => {
	return (
		<div>
			<div className={styles.container}>
				<Image src={headerImg} alt='alt' style={{ width: "100%", height: "100%" }} />
			</div>
			<main>{children}</main>
			<Image src={footerImg} alt='alt' style={{ width: "100%", height: "100%" }} />
		</div>
	)
}
