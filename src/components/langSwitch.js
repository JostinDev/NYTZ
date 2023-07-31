import React, {useEffect} from "react";
import {useRouter} from "next/router";

export default function LangSwitch() {

    let bubble
    const router = useRouter();

    useEffect(() => {
        bubble = document.querySelector('#bubble')

    },);


    function switchLangTo(lang) {

       let translate;

        switch (lang) {
            case 'FR':
                translate = window.innerWidth < 640 ? 'translateX(0px)' : 'translateX(0px)'
                router.push('/', '/', { locale: 'fr-CH' })
                break;
            case 'DE':
                translate = window.innerWidth < 640 ? 'translateX(44px)' : 'translateX(61px)'
                router.push('/', '/', { locale: 'de-DE' })
                break;
            case 'EN':
                translate = window.innerWidth < 640 ? 'translateX(88px)' : 'translateX(121px)'
                router.push('/', '/', { locale: 'en-US' })
                break;
        }
        bubble.style.transform = translate;

        console.log(router.locale)
    }

    return (

            <div
				className="relative flex cursor-pointer items-center p-1 sm:p-1.5 text-button transition-all duration-300
				bg-cloud h-[44px] sm:h-[62px] dark:bg-storm dark:text-white w-[132px] sm:w-[183px] rounded-full select-none"
                id="darkModeToggle">
				<span
                    id='bubble'
					className="absolute inline-block w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] bg-white transition-all duration-300 dark:bg-black translate-x-0 rounded-full">
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

