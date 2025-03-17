"use client";
import type { IGame } from "@/app/api/getGames";
import Image from "next/image";
import React from "react";

const ContainerGameFound = ({ game }: { game: IGame }) => {
	return (
		<section className="grid grid-cols-1 justify-items-center mb-10">
			<Image
				className="rounded-lg w-96"
				src={game.thumbnail}
				alt={game.title}
				width={1200}
				height={1080}
				// sizes={"50vw"}
			/>

			<div className="flex gap-4 items-center justify-center mt-4 flex-wrap">
				<h2>{game.title}</h2>-<p>{game.release_date}</p>
			</div>
			<p className="font-normal">{game.short_description}</p>
		</section>
	);
};

export default ContainerGameFound;
