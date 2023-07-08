import React, { useEffect } from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero() {

	return (
			<div className='flex h-full w-full overflow-hidden whitespace-nowrap rotating-gradient rounded-3xl'>
				<div className='flex w-screen whitespace-nowrap absolute bottom-60 left-0 scale-[1.42]'>
					<Image alt='studio' src={studio} className="filterSVG animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="filterSVG animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="filterSVG animate-leftToRightStudio"/>
					<Image alt='studio' src={studio} className="filterSVG animate-leftToRightStudio"/>
				</div>

				<div className='flex w-screen whitespace-nowrap absolute bottom-20 left-0'>
					<Image alt='studio' src={nytz} className="filterSVG animate-leftToRightNytz"/>
					<Image alt='studio' src={nytz} className="filterSVG animate-leftToRightNytz"/>
					<Image alt='studio' src={nytz} className="filterSVG animate-leftToRightNytz"/>
					<Image alt='studio' src={nytz} className="filterSVG animate-leftToRightNytz"/>
				</div>
			</div>
	);
}

