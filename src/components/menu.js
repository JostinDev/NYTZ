import React, {useEffect, useRef} from "react";
import DarkLightSwitch from "@/components/darkLightSwitch";
import LangSwitch from "@/components/langSwitch";
export default function Menu(props) {

	const ref = useRef('')

	useEffect(() => {
		ref.current = document.querySelector('#mobileMenu')
	}, );

	function displayMenu() {
		document.querySelector('#menu1').classList.remove('!bottom-0')
		document.querySelector('#menu2').classList.remove('!bottom-0')
		document.querySelector('#menu3').classList.remove('!bottom-0')
		document.querySelector('#menu4').classList.remove('!bottom-0')

		setTimeout(function() {
			document.querySelector('#menu1').classList.add('!bottom-0')
		}, 100);
		setTimeout(function() {
			document.querySelector('#menu2').classList.add('!bottom-0')
		}, 250);
		setTimeout(function() {
			document.querySelector('#menu3').classList.add('!bottom-0')
		}, 400);
		setTimeout(function() {
			document.querySelector('#menu4').classList.add('!bottom-0')
		}, 550);
	}

	function toggleMenu(isOpen) {
		ref.current.classList.toggle('hidden')

		if(isOpen) {
			document.querySelector('body').style.overflowY = 'hidden'
			displayMenu()
		} else {
			document.querySelector('body').style.overflowY = 'auto'
		}

	}

	return (
		<div>
			<div
				onClick={()=>toggleMenu(true)}
				id='menuToggle'
				className='flex transition-all duration-75 text-button sm:hover:text-button-action-desk hover:text-button-action active:text-button-action sm:active:text-button-action-desk items-center justify-center w-[101px] h-[44px] sm:w-[167px] sm:h-[62px] border hover:border-[3px] rounded-full border-cloud text-cloud active:text-obsidian active:border-0 active:bg-cloud cursor-pointer select-none'>
				Menu
			</div>

			<div
				id='mobileMenu'
				className={`fixed flex flex-col pt-4 ${props.scrolled ? 'sm:py-4' : 'sm:py-8'} pr-12 pl-28 top-0 left-0 right-0 bg-white dark:bg-black hidden`} style={{height: 100 + 'svh'}}>

				<div
					onClick={()=>toggleMenu(false)}
					className='flex transition-all duration-75 text-button sm:hover:text-button-action-desk hover:text-button-action active:text-button-action sm:active:text-button-action-desk items-center ml-auto justify-center w-[101px] h-[44px] sm:w-[167px] sm:h-[62px] border hover:border-[3px] rounded-full border-obsidian dark:border-cloud text-obsidian dark:text-cloud active:text-cloud dark:active:text-obsidian active:border-0 active:bg-obsidian dark:active:bg-cloud cursor-pointer select-none'>
					Close
				</div>

				<div className='text-obsidian dark:text-white'>
					<div className='transition-all overflow-hidden relative h-32 mb-10'>
						<span className='text-ornament absolute bottom-5'>01</span>
						<p id='menu1' className='text-title absolute ml-10 -bottom-32 inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>What we do</p>
					</div>
					<div className='transition-all overflow-hidden relative h-32 mb-10'>
						<span className='text-ornament absolute bottom-5'>02</span>
						<p id='menu2'  className='text-title absolute ml-10 -bottom-32 inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>Who we are</p>
					</div>
					<div className='transition-all overflow-hidden relative h-32 mb-10'>
						<span className='text-ornament absolute bottom-5'>03</span>
						<p id='menu3'  className='text-title absolute ml-10 -bottom-32 inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>Contact us</p>
					</div>
					<div className='transition-all overflow-hidden relative h-32 mb-10'>
						<span className='text-ornament absolute bottom-5'>04</span>
						<p id='menu4'  className='text-title absolute ml-10 -bottom-32 inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>Impressum</p>
					</div>
				</div>


				<div className='flex absolute bottom-8 right-8 gap-5'>
					<DarkLightSwitch></DarkLightSwitch>
					<LangSwitch></LangSwitch>
				</div>
			</div>
		</div>
	);
}
