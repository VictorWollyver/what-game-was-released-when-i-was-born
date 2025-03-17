"use client";

import dayjs from "dayjs";
import Input from "./Input";
import { getGames, type IGame } from "@/app/api/getGames";
import React from "react";
import { Check } from "lucide-react";
import Confetti from "react-confetti";

const FormSearchGame = ({
	setGame,
	setIsNotFound,
}: {
	setGame: React.Dispatch<React.SetStateAction<IGame | null>>;
	setIsNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [width, setWidth] = React.useState<number | null>(null);
	const [height, setHeight] = React.useState<number | null>(null);
	const [isConfettiActive, setIsConfettiActive] = React.useState(false);

	React.useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		handleResize();
	}, []);

	async function handleSearchGame(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const birthdate = form.get("birthdate") as string;

		const isDateValid = dayjs(birthdate).isValid();
		if (!isDateValid) {
			alert("Please, enter a valid date");
			return;
		}

		try {
			setIsLoading(true);
			const { data, ok, error } = await getGames({
				birthdate: dayjs(birthdate).format("MM-DD"),
			});
			if (!ok) {
				throw new Error(error?.message);
			}
			console.log(data);
			setGame(data);
			setIsConfettiActive(true);
			setIsNotFound(false);
		} catch (error) {
			setIsLoading(false);

			setIsNotFound(true);
		} finally {
			setIsLoading(false);
			setTimeout(() => {
				setIsConfettiActive(false);
			}, 5000);
		}
	}

	return (
		<>
			{isConfettiActive && (
				<Confetti
					run={isConfettiActive}
					width={width as number}
					height={height as number}
					numberOfPieces={200}
					tweenDuration={1000}
					recycle={false}
				/>
			)}

			<form onSubmit={handleSearchGame}>
				<div className="flex items-center justify-center gap-2">
					<Input name="birthdate" />
					<button
						type="submit"
						className="py-4 px-4 rounded-2xl h-16 border-1 text-blue-500 border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
					>
						{!isLoading && <Check size={"30px"} />}
						{isLoading && (
							<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
						)}
					</button>
				</div>
			</form>
		</>
	);
};

export default FormSearchGame;
