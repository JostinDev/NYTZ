import React, { useEffect } from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero() {

	return (
			<div className='flex h-[96%] w-screen overflow-hidden whitespace-nowrap rotating-gradient rounded-3xl select-none'>
				<div className='flex w-screen whitespace-nowrap absolute bottom-80 left-0 scale-[1.2] animate-leftToRightStudio'>
					<Image alt='studio' src={studio} className="scale-[1.25]"/>
					<Image alt='studio' src={studio} className="scale-[1.25]"/>
					<Image alt='studio' src={studio} className="scale-[1.25]"/>
					<Image alt='studio' src={studio} className="scale-[1.25]"/>
				</div>

				<div className='flex w-screen whitespace-nowrap absolute bottom-28 left-0 animate-leftToRightNytz'>
					<Image alt='studio' src={nytz}/>
					<Image alt='studio' src={nytz}/>
					<Image alt='studio' src={nytz}/>
					<Image alt='studio' src={nytz}/>
				</div>
			</div>
	);
}

