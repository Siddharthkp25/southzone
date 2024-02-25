// MODULES //

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import ContactForm from "@/components/Form";
// SECTIONS //

// PLUGINS //

// STYLES //

/** Contact Page */
export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="contactPage">
				<h2>This is contact page</h2>
				<ContactForm />
			</main>
			<Footer />
		</div>
	);
}
