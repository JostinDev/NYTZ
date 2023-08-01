import Head from 'next/head'
import React, {useEffect, useState} from "react";
import Hero from "../components/hero"
import Nav from "../components/nav"
import Image from "next/image";
import whale from "../../public/images/whale.png";
import taichi from "../../public/images/taichi.png";
import sunrise from "../../public/images/sunrise.png";
import Card from "@/components/card";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				'common'
			])),
			// Will be passed to the page component as props
		},
	}
}

export default function Home() {
	const { t } = useTranslation('common')

	const [tabState, setTabState] = useState(1)

	useEffect(() => {
		const heroHeight = document.querySelector('.hero')
		const firstSection = document.querySelector("#firstSection")
		firstSection.style.marginTop = heroHeight.clientHeight + 'px'

		if(tabState === 1) {
			moveTab(undefined, 1)
		}

		function handleResize() {
			moveTab(undefined, tabState)
		}

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});


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
			<div className={'relative'}>
				<Image
					id='heroImage'
					className='w-full max-h-[900px]'
					src={taichi}
					alt="Picture of the author"
					placeholder='blur'
					style={{objectFit:"cover"}}
				/>
				<div className='container mx-auto px-5'>
					<h1 className='text-subtitle1 mt-14'>Why 3D?</h1>
					<div className='h-1 w-9 bg-obsidian dark:bg-white mt-3'></div>
					<p className='text-cardText1 mt-4'>3D is the best way to make your product stand out from the crowd.</p>
				</div>

				<div className='flex gap-8 mt-28 flex-wrap lg:flex-nowrap container mx-auto px-5'>

					<Card
						title={'Our process'}
						description={'We believe in the agile process. We would love to discuss our approach with you'}
						more={'We believe in the agile process. We would love to discuss our approach with you. We believe in the agile process. We would love to discuss our approach with you.'}
					></Card>


					<Card
						title={'Our process'}
						description={'We believe in the agile process. We would love to discuss our approach with you'}
						more={'We believe in the agile process. We would love to discuss our approach with you. We believe in the agile process. We would love to discuss our approach with you.'}
					></Card>

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

		let dest;
		let bubbleTabWidth
		let offset
		const tab = document.querySelector("#tab").getBoundingClientRect();
		const bubbleTab = document.querySelector("#bubbleTab");


		if (event) {
			dest = event.target.getBoundingClientRect();
			bubbleTabWidth = 20 * 2 + event.target.offsetWidth
			offset = bubbleTabWidth / 2 - event.target.offsetWidth / 2

		} else {
			const tab = document.querySelector("#tab" + step)
			dest = tab.getBoundingClientRect();
			bubbleTabWidth = 20 * 2 + tab.offsetWidth
			offset = bubbleTabWidth / 2 - tab.offsetWidth / 2
		}

		const leftMargin = dest.left - tab.left - offset;

		switch (step) {
			case 1:
				bubbleTab.style.width = bubbleTabWidth - 20 + 'px'
				bubbleTab.style.left = leftMargin + 12 + 'px'
				break;
			case 4:
				bubbleTab.style.width = bubbleTabWidth - 20 + 'px'
				bubbleTab.style.left = leftMargin + 8  + 'px'
				break;
			default:
				bubbleTab.style.width = bubbleTabWidth + 'px'
				bubbleTab.style.left = leftMargin + 'px'
		}
		setTabState(step)
	}


	return (
		<>
			<Head>
				<title>NYTZ - STUDIO</title>
				<meta name="description" content="Generated by create next app"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/images/favicon.ico"/>
			</Head>
			<main>
				<Nav></Nav>
				<div className="hero mx-auto px-8 sm:px-12 fixed bg-neutral-900 w-full top-[110px] bottom-0">
					<Hero></Hero>
				</div>

				<div id='firstSection' className='mt-10 rounded-t-3xl pt-40 pb-16 bg-white dark:bg-black relative'>

					<div className='container mx-auto px-10 mb-24 md:mb-72 lg:mb-80'>
						<p className='text-hero text-obsidian dark:text-white relative'><span className='text-ornament absolute bottom-[13px] -ml-10'>01</span>{t('whatWeDo')}</p>

						<p className='text-subtitle1 text-obsidian dark:text-white mt-24 md:mt-72 lg:mt-80'>We help creating your dreams.</p>
						<p className='text-statement text-obsidian dark:text-white'>With us you can elevate your digital experience to the next level.</p>
					</div>


					<div className='sticky top-36 z-10 container mx-auto overflow-y-hidden sm:overflow-y-visible overflow-x-scroll sm:overflow-x-visible sm:my-16 fuckScrollBar'>
						<div id='tab'
							 className='relative flex flex-row justify-between text-body backdrop-blur-[10px]
							  text-obsidian dark:text-white sm:w-full bg-cloud dark:bg-storm rounded-full h-[67px] sm:h-[85px]
							   items-center px-5 w-[600px] m-[10px] sm:m-0'>
							<span id='bubbleTab' className='absolute bg-white dark:bg-obsidian w-[280px] h-[43px] sm:h-[60px] rounded-full left-0 transition-all'></span>
							<p id='tab1' className='z-10 cursor-pointer px-4 lg:px-10 py-8' onClick={(e)=> moveTab(e,1)}>3D Projects</p>
							<p id='tab2' className='z-10 cursor-pointer px-4 lg:px-10 py-8' onClick={(e)=> moveTab(e,2)}>UI & UX Design</p>
							<p id='tab3' className='z-10 cursor-pointer px-4 lg:px-10 py-8' onClick={(e)=> moveTab(e,3)}>Coding</p>
							<p id='tab4' className='z-10 cursor-pointer px-4 lg:px-10 py-8' onClick={(e)=> moveTab(e,4)}>Video & Photo</p>
						</div>
						<div className='border-gradient sm:m-0 -z-50 rounded-full w-[600px] sm:w-auto'></div>
					</div>
					<div className='bg-white dark:bg-black'>
						<Activity step={tabState}></Activity>
					</div>
				</div>
			</main>
		</>
	)
}
