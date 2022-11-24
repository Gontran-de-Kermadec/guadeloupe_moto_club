import type { NextPageWithLayout } from "./_app";
import { ReactElement, useRef, useState, useEffect } from "react";
import firebaseConfig from "../components/utils/firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/functions";
import Layout from "../components/layout";
import contactStyle from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";

//initialize Cloud Functions through Firebase
firebase.initializeApp(firebaseConfig);
firebase.functions();
const Contact: NextPageWithLayout = () => {
	const reg = /[@#$%^&*;):(<>+=`_]+/gi;
	const form = useRef<HTMLFormElement>(null);
	const [success, setSuccess] = useState(false);
	const [fail, setFail] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);
	const sendEmail = firebase.functions().httpsCallable("sendEmail");
	const handleInput = (e: { currentTarget: { value: string } }) => {
		const value = reg.test(e.currentTarget.value);
		if (value) {
			setIsInvalid(true);
		} else {
			setIsInvalid(false);
		}
	};
	//function to send form
	const sendForm = (e: {
		target: any;
		currentTarget: any;
		preventDefault: () => void;
	}) => {
		e.preventDefault();
		if (!isInvalid) {
			emailjs
				.sendForm(
					// "service_ekg20de",
					"service_b9w9iaj",
					"template_akv93fo",
					form.current as any,
					"user_Ucen0nIkMHGKzdR7E0veU"
				)
				.then(
					(result) => {
						console.log(result);
						setSuccess(!success);
					},
					(error) => {
						console.log(error.text);
						setFail(true);
					}
				);
			e.target.reset();
		}
	};
	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setSuccess(!success);
			}, 10000);
		}
	}, [success]);
	return (
		<div className={contactStyle.contact__section}>
			<h1>Contact</h1>
			<div className={contactStyle.contact__form}>
				<div className="contact__flex">
					<form ref={form} onSubmit={sendForm}>
						<div className={contactStyle.form__fullname}>
							<div className={contactStyle.control}>
								<input
									id="name"
									type="text"
									name="user_name"
									placeholder="NOM"
									required
									onChange={handleInput}
								/>
							</div>
							<div className={contactStyle.control}>
								<input
									id="firstname"
									type="text"
									name="user_firstname"
									placeholder="PRÉNOM"
									required
									onChange={handleInput}
								/>
							</div>
						</div>
						<div className={contactStyle.control}>
							<input
								id="email"
								type="email"
								name="user_email"
								placeholder="EMAIL"
								required
							/>
						</div>
						<div className={contactStyle.control}>
							<input
								id="subject"
								type="text"
								name="user_subject"
								placeholder="SUJET"
								required
								onChange={handleInput}
							/>
						</div>
						<div className={contactStyle.control}>
							<textarea
								id="message"
								name="user_message"
								placeholder="MESSAGE"
								required
							/>
						</div>
						<div className={contactStyle.control}>
							<input type="submit" id={contactStyle.send} value="ENVOYER" />
						</div>
						{isInvalid && (
							<p className={contactStyle.contact__invalid}>
								Pas de caractères spéciaux comme (@,{"<"}, =, %...) !!
							</p>
						)}
					</form>
				</div>
				{success && (
					<p className={contactStyle.contact__messagesent}>
						Votre message a bien été envoyé
					</p>
				)}
			</div>
			{fail && (
				<p className={contactStyle.contact__messageunsent}>
					Le message n&apos;a pas été envoyé. Essayer à nouveau plus tard ou
					contactez moi à l&apos;adresse suivante:
					<br />
					<a href="mailto:guadeloupemotoclub@outlook.fr">
						guadeloupemotoclub@outlook.fr
					</a>
				</p>
			)}
		</div>
	);
};
Contact.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Contact;
