import React, {useEffect, useState} from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero() {

	const [isMobile, setIsMobile] = useState(true)


	useEffect(() => {
		setIsMobile(window.innerWidth < 640)


	},[]);

	let className = 'flex absolute bottom-40 sm:bottom-60 scale-[1.4]' + (isMobile ? ' animate-leftToRightStudio' : '')


	return (
			<div className={'flex h-[96%] w-full  whitespace-nowrap rotating-gradient rounded-3xl'}>
				<div className={className} >
					<Image loading = 'eager' alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image loading = 'eager' alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image loading = 'eager' alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image loading = 'eager' alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image loading = 'eager' alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image loading = 'eager' alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
				</div>

				<div className={isMobile ? 'flex absolute bottom-20 animate-leftToRightNytz':'flex absolute bottom-20'} >
					<Image loading = 'eager' alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image loading = 'eager' alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image loading = 'eager' alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image loading = 'eager' alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image loading = 'eager' alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image loading = 'eager' alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
				</div>
			</div>
	);
}
