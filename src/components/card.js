import React, {useEffect, useState} from "react";
import openCard from "../../public/open-card.svg";
import openCardDark from "../../public/open-card-dark.svg";
import Image from "next/image";

export default function Card() {

	const [backdrop, setBackdrop] = useState(false)

	useEffect(() => {

		if(backdrop) {
			document.querySelector('body').style.overflowY = 'hidden'
		} else {
			document.querySelector('body').style.overflowY = 'auto'
		}
	}, );

	function BackDrop() {
		return (
			<div className='flex fixed top-0 bottom-0 right-0 left-0 justify-center items-center z-50'>
				<div className='fixed top-0 bottom-0 right-0 left-0 backdrop-blur-xl'></div>
				<div className='flex flex-col bg-white justify-between rounded-2xl w-[900px] pt-20 px-20 pb-16 z-30'>
					<h3 className='font-bold text-3xl'>Our suite</h3>
					<p className='h-1 w-10 bg-nytz-dark mt-8 mb-16'></p>
					<p className='mb-16'>
						3D is a way to make your product stand out from the crowd 3D is a way to make your product
						stand out from the crowd 3D is a way to make your product stand out from the crowd 3D is a
						way to make your product stand out from the crowd 3D is a way to make your product stand out
						from the crowd 3D is a way to make your product stand out from the crowd 3D is a way to make
						your product stand out from the crowd 3D is a way to make your product stand out from the crowd
						3D is a way to make your product stand out from the crowd
					</p>

					<p
						onClick={()=> setBackdrop(false)}
						className='border border-nytz-dark w-14 h-14 flex rounded-full self-center flex-wrap justify-center content-center cursor-pointer'>
						X
					</p>
				</div>
		</div>
		)
	}

	return (
		<div className='relative'>
			<div className='flex flex-col justify-between bg-fog dark:bg-obsidian rounded-[48px] h-96 p-10 relative z-10'>
				<div>
					<h3 className='text-subtitle2 mb-8'>Our Suite</h3>
					<p className='text-cardText2'>We work with Blender, but are also starting to offer Unreal Engine</p>
				</div>

				<span onClick={()=> setBackdrop(true)} className='absolute bottom-5 right-5 cursor-pointer'>
					<Image alt='More information' src={openCard} className='block dark:hidden'></Image>
					<Image alt='More information' src={openCardDark} className='hidden dark:block'></Image>
				</span>

			</div>
			<div className='border-gradient rounded-[50px]'></div>
			{backdrop === true && (
				<BackDrop></BackDrop>
			)}
		</div>
	);
}
