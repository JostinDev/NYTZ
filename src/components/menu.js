import React, {useEffect} from "react";
import DarkLightSwitch from "@/components/darkLightSwitch";
export default function Menu() {


	let test;
	useEffect(() => {
		test = document.querySelector('#mobileMenu')
	}, );

	function toggleMenu(isOpen) {
		test.classList.toggle('hidden')

		if(isOpen) {
			document.querySelector('body').style.overflowY = 'hidden'
		} else {
			document.querySelector('body').style.overflowY = 'auto'
		}

	}

	return (
		<div>
			<div
				onClick={()=>toggleMenu(true)}
				id='menuToggle'
				className='flex text-button hover:text-button-action active:text-button-action items-center justify-center w-[167px] h-[62px] border hover:border-[3px] rounded-full border-cloud text-cloud active:text-obsidian active:border-0 active:bg-cloud cursor-pointer select-none'>
				Menu
			</div>

			<div
				id='mobileMenu'
				className='fixed flex flex-col pt-8 pr-12 pl-28 top-0 left-0 right-0 bg-white hidden' style={{height: 100 + 'svh'}}>

				<div
					onClick={()=>toggleMenu(false)}
					className='flex text-button hover:text-button-action active:text-button-action items-center ml-auto justify-center w-[167px] h-[62px] border hover:border-[3px] rounded-full border-obsidian text-obsidian active:text-cloud active:border-0 active:bg-obsidian cursor-pointer select-none'>
					Close
				</div>

				<DarkLightSwitch></DarkLightSwitch>

				<div className='text-nytz-dark'>
					<div>
						<span className='text-ornament'>01</span><p className='pb-14 text-title inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>What we do</p>
					</div>
					<div>
						<span className='text-ornament'>02</span><p className='pb-14 text-title inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>Who we are</p>
					</div>
					<div>
						<span className='text-ornament'>03</span><p className='pb-14 text-title inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>Contact us</p>
					</div>
					<div>
						<span className='text-ornament'>04</span><p className='pb-14 text-title inline-block cursor-pointer transition-all hover:skew-x-[-10deg]'>Impressum</p>
					</div>
				</div>
			</div>
		</div>
	);
}
