import React, {useEffect, useState} from "react";
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
		<div className='flex flex-col justify-between bg-nytz-cream rounded-2xl h-96 p-10'>
			<div>
				<h3 className='font-bold mb-11'>Our Suite</h3>
				<p>We work with Blender, but are also starting to offer Unreal Engine</p>
			</div>
			<p
				onClick={()=> setBackdrop(true)}
				className='border border-nytz-dark w-14 h-14 flex rounded-full self-center flex-wrap justify-center content-center cursor-pointer'>
				+
			</p>

			{backdrop === true && (
				<BackDrop></BackDrop>
			)}

		</div>
	);
}
