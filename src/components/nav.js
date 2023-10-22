import React, {useEffect, useState} from "react";
import Menu from "@/components/menu";

export default function Nav() {

	const [scrolled, setScrolled] = useState(false)


	useEffect(() => {
		window.addEventListener("scroll", scrollStatus);
		return () => {
			window.removeEventListener("scroll", scrollStatus);
		};
	});

	function scrollStatus() {

		let scroll = window.scrollY

		let hero = document.querySelector('.hero');

		if(window.scrollY > hero.offsetHeight) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
		console.log("SCROLL : ", scroll)
	}


	return (
		<div className='nav fixed right-0 left-0 top-0 z-50 bg-neutral-900'>
			<div className={`transition-all mx-auto pr-12 py-4 ${scrolled ? 'sm:py-4' : 'sm:py-8'}`}>
				<div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
					<Menu scrolled={scrolled}></Menu>
				</div>
			</div>
		</div>
	);
}
