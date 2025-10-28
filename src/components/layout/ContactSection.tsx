import { SERVICE_ID, TEMPLATE_ID } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const ContactSection = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail: React.FormEventHandler = (e) => {
		e.preventDefault();

		if (!form.current) return;

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
				publicKey: "YOUR_PUBLIC_KEY",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				},
			);
	};

	return (
		<section className="contact-section section">
			<h2 className="mb-4">Contact Me</h2>
			<form onSubmit={sendEmail} ref={form} className="flex flex-col gap-2">
				<input type="text" name="name" placeholder="name" required />
				<input type="email" name="email" placeholder="email" required />
				<textarea
					name="message"
					placeholder="your message"
					required
					rows={5}
				></textarea>
				<button className="btn max-w-24 mt-4">Send</button>
			</form>
		</section>
	);
};
