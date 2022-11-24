import Link from "next/link";
import mail from "../public/mail-img.png";
import footerStyle from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<div>
			<footer className={footerStyle.footer}>
				<div className={footerStyle.footer__communication}>
					<ul className={footerStyle.footer__socials}>
						<li>
							<a
								href="https://www.facebook.com/profile.php?id=100063801930452"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									//className={headerStyle.header__icon__facebook}
									fill="#000000"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="48px"
									height="48px"
								>
									{" "}
									<path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/motocross_guadeloupe/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									fill="#000000"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 48 48"
									width="48px"
									height="48px"
								>
									<path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" />
								</svg>
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/channel/UCYeTXubsMAAVzp-7whA33xQ"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									fill="#000000"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 50 50"
									width="50px"
									height="50px"
								>
									<path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
								</svg>
							</a>
						</li>
					</ul>
					<Link href="/contact">
						<a className={footerStyle.footer__mail}>
							<p>Contactez nous</p>
							<div>
								<Image src={mail} alt=""></Image>
							</div>
						</a>
					</Link>
					{/* <Link href="mailto:guadeloupemotoclub@outlook.fr">
						<a className={footerStyle.footer__mail}>
							<p>Contactez nous</p>
							<div>
								<Image src={mail} alt=""></Image>
							</div>
						</a>
					</Link> */}
				</div>
				<Link href="/mentions">
					<a>Mentions légales - Politique de confidentialité</a>
				</Link>
			</footer>
		</div>
	);
};

export default Footer;
