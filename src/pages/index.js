import Head from 'next/head'
import React, {useEffect, useState} from "react";
import Hero from "../components/hero"
import Nav from "../components/nav"
import Image from "next/image";
import whale from "../../public/whale.png";
import taichi from "../../public/taichi.png";
import sunrise from "../../public/sunrise.png";
import Card from "@/components/card";

export default function Home() {

	const [tabState, setTabState] = useState(1)

	useEffect(() => {
		const heroHeight = document.querySelector('.hero')
		const firstSection = document.querySelector("#firstSection")
		firstSection.style.marginTop = heroHeight.clientHeight + 'px'

		if(tabState === 1) {
			const bubbleTab = document.querySelector("#bubbleTab");
			const tab1 = document.querySelector("#tab1");
			const bubbleTabWidth = 40 * 2 + tab1.offsetWidth
			bubbleTab.style.width = bubbleTabWidth + 'px'
		}
	},);

	function Activity(props) {

		let render

		switch (props.step) {
			case 1:
				render = <ThreeD></ThreeD>
				break;
			case 2:
				render = <UI></UI>
				break;
			case 3:
				render = <Coding></Coding>
				break;
			case 4:
				render = <Video></Video>
				break;
		}
		return (
			render
		)
	}

	function ThreeD() {
		return (
			<div>
				<Image
					id='heroImage'
					className='w-full rounded-3xl'
					src={taichi}
					alt="Picture of the author"
					placeholder='blur'
				/>
				<div className='px-24'>
					<h1 className='text-5xl mt-14'>Why 3D?</h1>
					<p className='h-1 w-20 bg-nytz-dark mt-8 rounded'></p>
					<h3 className='text-3xl mt-16'>3D is the best way to make your product stand out from the crowd.</h3>
					<h3 className='text-3xl mt-16'>3D is the best way to make your product stand out from the crowd.</h3>
					<h3 className='text-3xl mt-16'>3D is the best way to make your product stand out from the crowd.</h3>
					<h3 className='text-3xl mt-16'>3D is the best way to make your product stand out from the crowd.</h3>
					<h3 className='text-3xl mt-16'>3D is the best way to make your product stand out from the crowd.</h3>
				</div>

				<div className='flex gap-4 px-24 mt-28'>

					<Card></Card>
					<Card></Card>
					<Card></Card>

				</div>
			</div>
		)
	}

	function UI() {
		return (
			<div>
				<Image
					id='heroImage'
					className='w-full rounded-3xl'
					src={sunrise}
					alt="Picture of the author"
					placeholder='blur'
				/>
				<div className='px-24'>
					<h1 className='text-5xl mt-14'>Why UI & UX Design?</h1>
					<p className='h-1 w-20 bg-nytz-dark mt-8 rounded'></p>
					<h3 className='text-3xl mt-16'>A good user experience is crucial nowadays so that users want to buy your products / services</h3>
				</div>
			</div>
		)
	}

	function Coding() {
		return (
			<div>
				<Image
					id='heroImage'
					className='w-full rounded-3xl'
					src={whale}
					alt="Picture of the author"
					placeholder='blur'
				/>
				<div className='px-24'>
					<h1 className='text-5xl mt-14'>Why is code important?</h1>
					<p className='h-1 w-20 bg-nytz-dark mt-8 rounded'></p>
					<h3 className='text-3xl mt-16'>A product or website is only as good as the code that makes it run.</h3>
				</div>
			</div>
		)
	}

	function Video() {
		return (
			<div>
				<Image
					id='heroImage'
					className='w-full rounded-3xl'
					src={whale}
					alt="Picture of the author"
					placeholder='blur'
				/>
				<div className='px-24'>
					<h1 className='text-5xl mt-14'>Why 3D?</h1>
					<p className='h-1 w-20 bg-nytz-dark mt-8 rounded'></p>
					<h3 className='text-3xl mt-16'>3D is the best way to make your product stand out from the crowd.</h3>
				</div>
			</div>
		)
	}

	function moveTab(event, step) {

		const dest = event.target.getBoundingClientRect();
		const tab = document.querySelector("#tab").getBoundingClientRect();
		const bubbleTab = document.querySelector("#bubbleTab");

		const bubbleTabWidth = 40 * 2 + event.target.offsetWidth
		const offset = bubbleTabWidth / 2 - event.target.offsetWidth / 2

		bubbleTab.style.width = bubbleTabWidth + 'px'

		bubbleTab.style.right = 'auto'
		bubbleTab.style.left = dest.left - tab.left - offset + 'px'

		setTabState(step)
	}


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
				<div className="hero mx-auto px-12 fixed bg-neutral-900 w-full">
					<Hero></Hero>
				</div>

				<div id='firstSection' className='mt-10 rounded-t-3xl pt-40 pb-16 bg-zinc-50 dark:bg-neutral-900 relative'>
					<p className='text-7xl text-dark dark:text-white px-24'><span className='text-xl'>01</span>What we do</p>

					<div className='px-24 sticky top-36 z-10'>
						<div id='tab'
							 className='relative flex flex-row justify-between w-full bg-nytz-cream rounded-full h-[100px] items-center px-10 mt-16 mb-16'>
							<span id='bubbleTab' className='absolute bg-nytz-dark w-[280px] h-[100px] rounded-full left-0 transition-all'>

							</span>
							<p id='tab1' className='z-10 cursor-pointer px-10 py-8' onClick={(e)=> moveTab(e,1)}>3D Projects</p>
							<p id='tab2' className='z-10 cursor-pointer px-10 py-8' onClick={(e)=> moveTab(e,2)}>UI & UX Design</p>
							<p id='tab3' className='z-10 cursor-pointer px-10 py-8' onClick={(e)=> moveTab(e,3)}>Coding</p>
							<p id='tab4' className='z-10 cursor-pointer px-10 py-8' onClick={(e)=> moveTab(e,4)}>Video- & Photography</p>
						</div>
					</div>
					<div className='bg-zinc-50 dark:bg-neutral-900'>
						<Activity step={tabState}></Activity>
					</div>
				</div>
			</main>
		</>
	)
}
