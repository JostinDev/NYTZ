import React, {useEffect, useState} from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero(){

	const [isMobile, setIsMobile] = useState(false)


	useEffect(() => {
		function handleResize() {
			checkSize()
		}

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	},[]);


	function checkSize() {
		setIsMobile(window.innerWidth < 640)
	}

	let classStudio = 'flex absolute bottom-40 sm:bottom-72 scale-[1.4]' + (isMobile ? ' animate-leftToRightStudio' : '')
	let classStudioElement = (isMobile ? '' : ' animate-leftToRightStudio')

	let classNytz = 'flex absolute bottom-20 ' + (isMobile ? ' animate-leftToRightNytz' : '')
	let classNytzElement = (isMobile ? '':'animate-leftToRightNytz')


	return (
		<div className={'flex h-[96%] w-full whitespace-nowrap rotating-gradient rounded-3xl'}>
			<div className={classStudio} >
				<Image loading = 'lazy' alt='studio' src={studio} className={classStudioElement}/>
				<Image loading = 'lazy' alt='studio' src={studio} className={classStudioElement}/>
				<Image loading = 'lazy' alt='studio' src={studio} className={classStudioElement}/>
				<Image loading = 'lazy' alt='studio' src={studio} className={classStudioElement}/>
				<Image loading = 'lazy' alt='studio' src={studio} className={classStudioElement}/>
				<Image loading = 'lazy' alt='studio' src={studio} className={classStudioElement}/>
			</div>

			<div className={classNytz} >
				<Image loading = 'lazy' alt='studio' src={nytz} className={classNytzElement}/>
				<Image loading = 'lazy' alt='studio' src={nytz} className={classNytzElement}/>
				<Image loading = 'lazy' alt='studio' src={nytz} className={classNytzElement}/>
				<Image loading = 'lazy' alt='studio' src={nytz} className={classNytzElement}/>
				<Image loading = 'lazy' alt='studio' src={nytz} className={classNytzElement}/>
				<Image loading = 'lazy' alt='studio' src={nytz} className={classNytzElement}/>
			</div>
		</div>
	);
}