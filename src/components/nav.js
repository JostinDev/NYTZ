import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkLightSwitch from "@/components/darkLightSwitch";
import Menu from "@/components/menu";



export default function Nav() {

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	}


	return (
		<div className='sticky top-0 z-50 bg-neutral-900'>
			<div className="mx-auto pt-8 pr-12 pb-4">
				<div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
					<Menu></Menu>
				</div>
			</div>
		</div>
	);
}
