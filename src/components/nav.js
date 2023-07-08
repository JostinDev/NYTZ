import React from "react";
import Menu from "@/components/menu";



export default function Nav() {

	return (
		<div className='sticky top-0 z-50 bg-neutral-900'>
			<div className="mx-auto pt-8 pr-12 pb-[34px] sm:pb-4">
				<div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
					<Menu></Menu>
				</div>
			</div>
		</div>
	);
}
