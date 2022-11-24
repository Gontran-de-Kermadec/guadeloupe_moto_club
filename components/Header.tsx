import Link from "next/link";
import headerStyle from "../styles/Header.module.css";
import mail from "../public/mail-img.png";
import Logo from "../public/images/gmc-logo.png";
import Image from "next/image";
import { useEffect } from "react";

if (typeof document !== "undefined") {
	document.addEventListener("click", () => {
		const smallNavEl = document.querySelector(
			`.${headerStyle.header__smallScreen__menu}`
		);
		const smallNavServicesCross = document.querySelector(
			`.${headerStyle.header__services__cross}`
		);
		const smallNavServices = document.querySelector(
			`.${headerStyle.header__smallScreen__services}`
		);
		const hideMenu = () => {
			if (
				smallNavEl !== null &&
				smallNavEl.classList.contains(`${headerStyle.visible}`)
			) {
				smallNavEl.classList.remove(`${headerStyle.visible}`);
			}
			if (
				smallNavServicesCross !== null &&
				smallNavServicesCross.classList.contains(`${headerStyle.turned}`)
			) {
				smallNavServicesCross.classList.remove(`${headerStyle.turned}`);
			}
			if (
				smallNavServices !== null &&
				smallNavServices.classList.contains(`${headerStyle.visible}`)
			) {
				smallNavServices.classList.remove(`${headerStyle.visible}`);
			}
		};

		const hideLargeMenu = () => {
			const largeNavServices = document.querySelector(
				`.${headerStyle.header__largeScreen__listServices}`
			);
			const chevronUpHeader = document.querySelector(
				`.${headerStyle.header__largeScreen__chevronUp}`
			);
			const chevronDownHeader = document.querySelector(
				`.${headerStyle.header__largeScreen__chevronDown}`
			);
			largeNavServices
				? largeNavServices.classList.remove(`${headerStyle.visible}`)
				: null;
			chevronUpHeader
				? chevronUpHeader.classList.remove(`${headerStyle.invisible}`)
				: null;
			chevronDownHeader
				? chevronDownHeader.classList.remove(`${headerStyle.visible}`)
				: null;
		};
		hideMenu();
		hideLargeMenu();
	});
}
const Header = () => {
	const toggleMenu = (e: { stopPropagation: () => void } | undefined) => {
		e?.stopPropagation();
		const smallNavEl = document.querySelector(
			`.${headerStyle.header__smallScreen__menu}`
		);
		if (smallNavEl !== null) {
			smallNavEl.classList.toggle(`${headerStyle.visible}`);
		}
	};
	const toggleMenuServices = (
		screenSize: string | undefined,
		e: { stopPropagation: () => void } | undefined
	) => {
		e?.stopPropagation();
		const smallNavServices = document.querySelector(
			`.${headerStyle.header__smallScreen__services}`
		);
		const largeNavServices = document.querySelector(
			`.${headerStyle.header__largeScreen__listServices}`
		);
		const chevronUpHeader = document.querySelector(
			`.${headerStyle.header__largeScreen__chevronUp}`
		);
		const chevronDownHeader = document.querySelector(
			`.${headerStyle.header__largeScreen__chevronDown}`
		);
		const smallNavServicesCross = document.querySelector(
			`.${headerStyle.header__services__cross}`
		);
		if (screenSize === "large") {
			largeNavServices
				? largeNavServices.classList.toggle(`${headerStyle.visible}`)
				: null;
			chevronUpHeader
				? chevronUpHeader.classList.toggle(`${headerStyle.invisible}`)
				: null;
			chevronDownHeader
				? chevronDownHeader.classList.toggle(`${headerStyle.visible}`)
				: null;
		}
		if (screenSize === "small") {
			if (smallNavServices !== null) {
				smallNavServices.classList.toggle(`${headerStyle.visible}`);
			}
			if (smallNavServicesCross !== null) {
				smallNavServicesCross.classList.toggle(`${headerStyle.turned}`);
			}
		}
	};
	return (
		<div>
			<header className={headerStyle.header}>
				<div className={headerStyle.header__smallScreen}>
					<div className={headerStyle.logo__container}>
						<Image src={Logo} alt="" />
					</div>
					<p onClick={(e) => toggleMenu(e)} className="menu">
						MENU
					</p>
					<nav className={headerStyle.header__smallScreen__menu}>
						<ul>
							<li>
								<Link href="/homepage">
									<a onClick={(e) => toggleMenu(e)}>
										ACCUEIL
										<div className={headerStyle.menu__line}></div>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/qui-sommes-nous">
									<a onClick={(e) => toggleMenu(e)}>
										QUI SOMMES-NOUS ?
										<div className={headerStyle.menu__line}></div>
									</a>
								</Link>
							</li>
							<li onClick={(e) => toggleMenuServices("small", e)}>
								<p>
									SERVICES
									<div>
										<svg
											fill="#000000"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24px"
											height="24px"
											fillRule="evenodd"
											className={headerStyle.header__services__cross}
										>
											<path
												fillRule="evenodd"
												d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
											/>
										</svg>
										{/* <svg
										fill="#000000"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 50 50"
										width="50px"
										height="50px"
										className={headerStyle.header__services__cross}
									>
										<path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
									</svg> */}
									</div>
									<div className={headerStyle.menu__line}></div>
								</p>
								<ul className={headerStyle.header__smallScreen__services}>
									<li>
										<Link href="/adhesion">
											<a onClick={(e) => toggleMenu(e)}>ADHÉSION AU CLUB</a>
										</Link>
									</li>
									<li>
										<Link href="/inscription">
											<a onClick={(e) => toggleMenu(e)}>INSCRIPTION COURSE</a>
										</Link>
									</li>
									<li>
										<Link href="/reglement-gmc">
											<a onClick={(e) => toggleMenu(e)}>RÈGLEMENT GMC</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/calendrier">
									<a onClick={(e) => toggleMenu(e)}>
										CALENDRIER
										<div className={headerStyle.menu__line}></div>
									</a>
								</Link>
							</li>
							<li>
								<Link href="/partenaire">
									<a onClick={(e) => toggleMenu(e)}>
										DEVENIR PARTENAIRE
										<div className={headerStyle.menu__line}></div>
									</a>
								</Link>
							</li>
						</ul>
					</nav>
					{/* <div className={headerStyle.header__smallScreen__contact}>
					<ul className={headerStyle.header__socials}>
						<li>
							<svg
								className={headerStyle.header__icon__facebook}
								fill="#000000"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="48px"
								height="48px"
							>
								{" "}
								<path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
							</svg>
						</li>
						<li>
							<svg
								fill="#000000"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px"
							>
								<path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" />
							</svg>
						</li>
						<li>
							<svg
								fill="#000000"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 50 50"
								width="50px"
								height="50px"
							>
								<path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
							</svg>
						</li>
					</ul>
					<div className={headerStyle.header__mail}>
						<p>Contcatez nous</p>
						<img src={mail.src} alt="ff" />
					</div>
				</div> */}
					{/* <svg
							fill="#000000"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							width="50px"
							height="50px"
						>
							<path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z" />
						</svg> */}
				</div>
				<div className={headerStyle.header__largeScreen}>
					<div className={headerStyle.logo__container}>
						<Image src={Logo} alt="" />
					</div>
					<nav>
						<ul className={headerStyle.header__largeScreen__nav}>
							<li>
								<Link href="/homepage">
									<a>ACCUEIL</a>
								</Link>
							</li>
							<li>
								<Link href="/qui-sommes-nous">
									<a>QUI SOMMES-NOUS ?</a>
								</Link>
							</li>
							<li
								className={headerStyle.header__largeScreen__services}
								onClick={(e) => toggleMenuServices("large", e)}
							>
								<p>SERVICES</p>
								<div
									className={headerStyle.header__largeScreen__chevronUp}
								></div>
								<div
									className={headerStyle.header__largeScreen__chevronDown}
								></div>
								{/* <svg
								fill="#000000"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24px"
								height="24px"
								fill-rule="evenodd"
								className={headerStyle.header__services__cross}
							>
								<path
									fill-rule="evenodd"
									d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
								/>
							</svg> */}
								<ul className={headerStyle.header__largeScreen__listServices}>
									<li>
										<Link href="/adhesion">
											<a>ADHÉSION AU CLUB</a>
										</Link>
									</li>
									<li>
										<Link href="/inscription">
											<a>INSCRIPTION COURSE</a>
										</Link>
									</li>
									<li>
										<Link href="/reglement-gmc">
											<a>RÈGLEMENT GMC</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="/calendrier">
									<a>CALENDRIER</a>
								</Link>
							</li>
							<li>
								<Link href="/partenaire">
									<a>DEVENIR PARTENAIRE</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	);
};

export default Header;
