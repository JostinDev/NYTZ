import React, { useEffect } from "react";
export default function Menu() {

	let test;
	useEffect(() => {

		test = document.querySelector('#mobileMenu')

	}, );


	function toggleMenu() {
		console.log('sup')

		test.classList.toggle('hidden')
	}

	return (

		<div>

			<div
				onClick={toggleMenu}
				id='menuToggle'
				className='flex items-center justify-center w-[167px] h-[62px] border rounded-full border-nytz-cream text-nytz-cream cursor-pointer'>
				Menu
			</div>



			<div
				id='mobileMenu'
				className='fixed flex flex-col pt-8 pr-12 pl-28 top-0 left-0 right-0 bg-white hidden' style={{height: 100 + 'svh'}}>

				<div
					onClick={()=>toggleMenu()}
					className='flex items-center ml-auto justify-center w-[167px] h-[62px] border rounded-full border-nytz-dark text-nytz-dark cursor-pointer'>
					Close
				</div>

				<div>
					<p className='pb-14'><span>01</span>What we do</p>
					<p className='pb-14'><span>02</span>Who we are</p>
					<p className='pb-14'><span>03</span>Contact us</p>
					<p className='pb-14'><span>04</span>Impressum</p>

				</div>

			</div>

		</div>
	);
}
