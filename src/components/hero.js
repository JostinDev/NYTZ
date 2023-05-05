import React, { useEffect } from "react";
import Image from "next/image";
import { FastAverageColor } from "fast-average-color";

import whale from "../../public/whale.png";
import taichi from "../../public/taichi.png";
import sunrise from "../../public/sunrise.png";

export default function Hero() {

	const images = [whale, taichi, sunrise]
	const [index, setIndex] = React.useState(1);
	const [heroColor, setHeroColor] = React.useState();
	const img = images.map((image, index) =>
		<Image
			key={index}
			id={'heroImage' + index}
			className={'w-full rounded-3xl absolute transition-opacity duration-300' + (index !== 0 ? ' opacity-0':'') }
			src={image}
			alt="Picture of the author"
			placeholder='blur'
		/>
	);

	useEffect(() => {
		const heroContainer = document.querySelector('#heroContainer')
		const firstImage = document.querySelector('#heroImage0')

		heroContainer.style.height = firstImage.clientHeight + 'px'

		changeTextColor(firstImage)

		const interval = setInterval(() => document.querySelector('#switch').click(), 2000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	function changeTextColor(heroImage) {
		const fac = new FastAverageColor();
		fac.getColorAsync(heroImage)
			.then(color => {
				setHeroColor(color.hex)
			})
			.catch(e => {
				console.log(e);
			});
	}

	function imageSwitch() {

		images.forEach((img,int) => {
			const element = document.querySelector('#heroImage' + int)
			element.classList.add('opacity-0')
			element.classList.remove('opacity-100')
		});

		if (index < images.length - 1) {
			setIndex(index + 1)
		}
		else {
			setIndex(0)
		}

		const current = document.querySelector('#heroImage' + index)
		current.classList.remove('opacity-0')
		current.classList.add('opacity-100')

		changeTextColor(current)
	}

	return (
		<div>
			<div id='heroContainer' className='relative'>
				{img}
				<div className="h-96 bg-gradient-to-t from-neutral-900 absolute bottom-0 w-full"></div>
				<div className="h-96 bg-gradient-to-t from-neutral-900 absolute bottom-0 w-full"></div>
			</div>

			<div id='heroText' style={{ color: heroColor }} className='-mt-20 z-10 relative ease-in-out duration-300'>
				<h1 className='text-8xl font-bold'>STUDIO NYTZ</h1>
				<p id='switch' className='hidden' onClick={imageSwitch}></p>
			</div>
		</div>
	);
}
