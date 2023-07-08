import React, { useEffect } from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero() {

	return (
			<div className='flex h-[96%] w-full  whitespace-nowrap rotating-gradient rounded-3xl'>
				<div className='flex absolute bottom-40 sm:bottom-60 scale-[1.4]' >
					<Image alt='studio' src={studio} className="animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="animate-leftToRightStudio"/>
				</div>

				<div className='flex absolute bottom-20'>
					<Image alt='studio' src={nytz} className='animate-leftToRightNytz'/>
					<Image alt='studio' src={nytz} className='animate-leftToRightNytz'/>
					<Image alt='studio' src={nytz} className='animate-leftToRightNytz'/>
					<Image alt='studio' src={nytz} className='animate-leftToRightNytz'/>
					<Image alt='studio' src={nytz} className='animate-leftToRightNytz'/>
					<Image alt='studio' src={nytz} className='animate-leftToRightNytz'/>
				</div>
			</div>
	);
}
