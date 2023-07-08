import Head from 'next/head'
import React from "react";
import Hero from "../components/hero"
import Nav from "../components/nav"


export default function Home() {



	return (
		<>
			<Head>
				<title>NYTZ - STUDIO</title>
				<meta name="description" content="Generated by create next app"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<main>
				<Nav></Nav>
				<div className="hero mx-auto px-8 sm:px-12 fixed bg-neutral-900 w-full top-[110px] bottom-0">
					<Hero></Hero>
				</div>

			</main>
		</>
	)
}
