import React from "react";
import Image from "next/image";

export default function Hero() {

	return (
			<div className='h-[96%] rotating-gradient rounded-3xl select-none'>
				<Image alt='' width={500} height={500}  src='/images/moving.gif' className="min-w-[1200px] w-full left-0 bottom-20 absolute">
				</Image>
			</div>
	);
}

