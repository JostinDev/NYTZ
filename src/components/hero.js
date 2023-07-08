import React, {useEffect, useState} from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero() {

	const [isMobile, setIsMobile] = useState(false)


	useEffect(() => {
		setIsMobile(window.innerWidth < 640)

	},[]);

	return (
			<div className={'flex h-[96%] w-full  whitespace-nowrap rotating-gradient rounded-3xl'}>
				<div className={isMobile ? 'flex absolute bottom-40 sm:bottom-60 scale-[1.4] animate-leftToRightStudio':'flex absolute bottom-40 sm:bottom-60 scale-[1.4]'} >
					<Image alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
					<Image alt='studio' src={studio} className={isMobile ? '':'animate-leftToRightStudio'}/>
				</div>

				<div className={isMobile ? 'flex absolute bottom-20 animate-leftToRightNytz':'flex absolute bottom-20'} >
					<Image alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
					<Image alt='studio' src={nytz} className={isMobile ? '':'animate-leftToRightNytz'}/>
				</div>
			</div>
	);
}
