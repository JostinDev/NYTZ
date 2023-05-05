import React, { useEffect } from "react";
import moon from "../../public/moon.png";
import sun from "../../public/sun.png";
import Image from "next/image";

export default function DarkLightSwitch() {

	let dark
	let light
	let userTheme
	let systemTheme

	useEffect(() => {

		dark = document.querySelector('#dark')
		light = document.querySelector('#light')

		userTheme = localStorage.getItem('theme')
		systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

		themeCheck()
		console.log('render')

	}, );

	function iconToggle() {
		dark.classList.toggle('hidden')
		light.classList.toggle('hidden')
	}

	function themeSwitch () {
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
			iconToggle()
			return
		}
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', 'dark')
		iconToggle()
	}

	function themeCheck() {
		if(userTheme === 'dark' || (!userTheme && systemTheme)) {
			document.documentElement.classList.add('dark')
			dark.classList.add('hidden')
			return
		}
		light.classList.add('hidden')
	}

	return (

		<div>
			<Image className='w-6 cursor-pointer' onClick={themeSwitch} id='dark' src={moon} alt='darkMode'/>
			<Image className='w-6 cursor-pointer' onClick={themeSwitch} id='light' src={sun} alt='lightMode'/>
		</div>
	);
}
