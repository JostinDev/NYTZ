import React, {useEffect, useState} from "react";
import openCard from "../../public/images/open-card.svg";
import openCardDark from "../../public/images/open-card-dark.svg";
import closeModal from "../../public/images/close-modal.svg";
import closeModalDark from "../../public/images/close-modal-dark.svg";
import Image from "next/image";

export default function Card(props) {

	const [backdrop, setBackdrop] = useState(false)

	useEffect(() => {
		if(backdrop) {
			document.querySelector('body').style.overflowY = 'hidden'
		} else {
			document.querySelector('body').style.overflowY = 'auto'
		}

		function escFunction(event){
			if (event.key === "Escape") {
				if(backdrop) {
					setBackdrop(false)
				}
			}
		}

		window.addEventListener("keydown", escFunction);
		return () => {
			window.removeEventListener("keydown", escFunction);
		};
	});


	function BackDrop() {
		return (
			<div className='flex fixed top-0 bottom-0 right-0 left-0 justify-center items-center z-50'>
				<div
					onClick={()=> setBackdrop(false)}
					className='fixed top-0 bottom-0 right-0 left-0 bg-modal-backdrop/60 dark:bg-black/60 backdrop-blur-xl'></div>
				<div className='flex flex-col bg-fog dark:bg-obsidian justify-between rounded-2xl w-[900px] pt-20 px-20 pb-16 z-30 mx-5'>
					<h3 className='text-subtitle1'>{props.title}</h3>
					<div className='h-1 w-9 bg-obsidian dark:bg-white mt-3'></div>

					<p className='text-body mt-16 mb-16'>{props.more}</p>
					<p
						onClick={()=> setBackdrop(false)}
						className='flex self-center flex-wrap justify-center content-center cursor-pointer rounded-full bg-fog dark:bg-obsidian'>
						<Image alt='' width={32} height={32} src={closeModal} className='block dark:hidden'></Image>
						<Image alt='' width={32} height={32} src={closeModalDark} className='hidden dark:block'></Image>
					</p>
				</div>
		</div>
		)
	}

	return (
		<div className='relative'>
			<div className='flex flex-col justify-between bg-fog dark:bg-obsidian rounded-[48px] h-96 p-10 relative z-10'>
				<div className='overflow-hidden'>
					<h3 className='text-subtitle2 mb-2'>{props.title}</h3>
					<p className='text-cardText2'>{props.description}</p>
				</div>
				<span onClick={()=> setBackdrop(true)} className='absolute bottom-5 right-5 cursor-pointer rounded-full bg-fog dark:bg-obsidian'>
					<Image alt='More information' width={54} height={54} src={openCard} className='block dark:hidden'></Image>
					<Image alt='More information' width={54} height={54} src={openCardDark} className='hidden dark:block'></Image>
				</span>

			</div>
			<div className='border-gradient rounded-[50px]'></div>
			{backdrop === true && (
				<BackDrop></BackDrop>
			)}
		</div>
	);
}
