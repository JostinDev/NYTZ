import React, { useEffect } from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero() {

	return (
			<div className='flex h-full w-full overflow-hidden whitespace-nowrap rotating-gradient rounded-3xl'>
				<div className='flex w-screen whitespace-nowrap absolute bottom-40 sm:bottom-60 left-0  animate-leftToRightStudio' >
					<Image alt='studio' src={studio} className="scale-[1.2]"/>
					<Image alt='studio' src={studio} className="scale-[1.2]"/>
					<Image alt='studio' src={studio} className="scale-[1.2]"/>
					<Image alt='studio' src={studio} className="scale-[1.2]"/>
				</div>

				<div className='flex w-screen whitespace-nowrap absolute bottom-20 left-0 animate-leftToRightNytz'>
					<Image alt='studio' src={nytz}/>
					<Image alt='studio' src={nytz}/>
					<Image alt='studio' src={nytz}/>
					<Image alt='studio' src={nytz}/>
				</div>
			</div>
	);
}
