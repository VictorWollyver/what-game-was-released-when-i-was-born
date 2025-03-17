"use client";
import type { IGame } from "@/app/api/getGames";
import React from "react";
import FormSearchGame from "./FormSearchGame";
import ContainerNotFound from "./ContainerNotFound";
import ContainerGameFound from "./ContainerGameFound";

const Container = () => {
	const [game, setGame] = React.useState<IGame | null>(null);
	const [isNotFound, setIsNotFound] = React.useState<boolean>(false);

	return (
		<>
			{!isNotFound && !game && (
				<h1 className="text-center mb-20 uppercase">
					What Game Was Released When I Was Born
				</h1>
			)}

			{isNotFound && <ContainerNotFound />}
			{game && <ContainerGameFound game={game} />}
			<FormSearchGame setGame={setGame} setIsNotFound={setIsNotFound} />
		</>
	);
};

export default Container;
