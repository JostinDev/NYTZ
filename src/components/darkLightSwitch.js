import React, {useEffect} from "react";
import moon from "../../public/moon.svg";
import moonDark from "../../public/moon-dark.svg";
import sun from "../../public/sun.svg";
import sunDark from "../../public/sun-dark.svg";
import Image from "next/image";

export default function DarkLightSwitch() {

    let dark
    let light
    let userTheme
    let systemTheme

    useEffect(() => {

        dark = document.querySelector('#dark')
        light = document.querySelector('#light')

        userTheme = localStorage.getItem('theme')
        systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

        themeCheck()

    },);


    function themeSwitch() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')

            return
        }
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }

    function themeCheck() {
        if (userTheme === 'dark' || (!userTheme && systemTheme)) {
            document.documentElement.classList.add('dark')
        }
    }

    return (

            <div
				onClick={themeSwitch}
				className="relative flex cursor-pointer items-center p-1.5 transition-all duration-300 bg-cloud h-[44px] sm:h-[62px] dark:bg-storm w-[88px] sm:w-[120px] rounded-full select-none"
                id="darkModeToggle">

				<span
					className="absolute inline-block w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] bg-white transition-all duration-300 dark:bg-black translate-x-0 dark:translate-x-[40px] sm:dark:translate-x-[58px] rounded-full">
				</span>

                <div className="relative z-10 flex w-1/2 sm:items-center">
					<Image className='w-7 sm:w-10 dark:hidden ml-[4px] sm:ml-[5px]' src={sun} alt='darkMode'/>
					<Image className='w-7 sm:w-10 hidden dark:block ml-[4px] sm:ml-[5px]' src={sunDark} alt='darkMode'/>
                </div>

                <div
                    className="relative z-10 flex w-1/2 items-center justify-center">
					<Image className='w-7 sm:w-10 dark:hidden ml-[3px] sm:ml-[5px]' src={moon} alt='darkMode'/>
					<Image className='w-7 sm:w-10 hidden dark:block ml-[3px] sm:ml-[5px]' src={moonDark} alt='darkMode'/>
                </div>
            </div>

    );
}
