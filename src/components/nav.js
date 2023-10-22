import React, {useEffect, useRef, useState} from "react";
import Menu from "@/components/menu";

export default function Nav() {

	const [scrolled, setScrolled] = useState(false)

	const ref = useRef('')

	useEffect(() => {

		ref.current = document.querySelector('.hero');

		window.addEventListener("scroll", scrollStatus);
		return () => {
			window.removeEventListener("scroll", scrollStatus);
		};
	});

	function scrollStatus() {

		if(window.scrollY > ref.current.offsetHeight) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
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
