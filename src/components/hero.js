import React, {useEffect, useState} from "react";
import Image from "next/image";

import studio from "../../public/studio.svg";
import nytz from "../../public/nytz.svg";

export default function Hero() {

	return (
			<div className={'flex h-[96%] w-full  whitespace-nowrap rotating-gradient relative rounded-3xl'}>


				<div className="slide-track-nytz absolute bottom-20">
					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>

					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>
					<Image priority={true} alt='studio' src={nytz}/>
				</div>


				<div className="slide-track-studio absolute bottom-40 sm:bottom-60">
					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>

					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>
					<Image priority={true} alt='studio' src={studio}/>
				</div>
			</div>
	);
}
