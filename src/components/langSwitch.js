import React, {useEffect} from "react";
import moon from "../../public/moon.svg";
import moonDark from "../../public/moon-dark.svg";
import sun from "../../public/sun.svg";
import sunDark from "../../public/sun-dark.svg";
import Image from "next/image";

export default function LangSwitch() {

    let bubble


    useEffect(() => {
        bubble = document.querySelector('#bubble')

    },);


    function switchLangTo(lang) {

        switch (lang) {
            case 'FR':
                bubble.style.transform = 'translateX(0px)'
                break;
            case 'DE':
                bubble.style.transform = 'translateX(61px)'
                break;
            case 'EN':
                bubble.style.transform = 'translateX(121px)'
                break;
        }
    }



    return (

            <div
				className="relative flex cursor-pointer items-center p-1.5 text-button transition-all duration-300
				bg-cloud h-[62px] dark:bg-storm dark:text-white w-[183px] rounded-full select-none"
                id="darkModeToggle">

				<span
                    id='bubble'
					className="absolute inline-block w-[50px] h-[50px] bg-white transition-all duration-300 dark:bg-black translate-x-0 rounded-full">
				</span>

                <div
                    onClick={()=>switchLangTo('FR')}
                    className="relative z-10 flex w-1/3 items-center justify-center">
                    <p className='-ml-2'>FR</p>
                </div>

                <div
                    onClick={()=>switchLangTo('DE')}
                    className="relative z-10 flex w-1/3 items-center justify-center">
					<p>DE</p>
                </div>

                <div
                    onClick={()=>switchLangTo('EN')}
                    className="relative z-10 flex w-1/3 items-center justify-center">
                    <p className='-mr-2'>EN</p>
                </div>
            </div>

    );
}
