"use server";

import { BASE_URL } from ".";
import { InternalServerError, NotFoundError } from "@/infra/errors";

export interface IGame {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
	screenshots: Array<{ id: number; image: string }>;
}

export async function getGames({ birthdate }: { birthdate: string }) {
	try {
		const response = await fetch(`${BASE_URL}/games`, {
			cache: "force-cache",
		});
		if (!response.ok) {
			throw new Error("Failed to fetch");
		}
		const data = await response.json();

		const gamesFiltred: IGame[] = data.filter((game: IGame) => {
			return game.release_date.includes(birthdate);
		});

		if (gamesFiltred.length === 0) {
			throw new NotFoundError({ cause: new Error("No games found") });
		}

		const randomIndex = Math.floor(Math.random() * gamesFiltred.length);

		const responseGame = await fetch(
			`${BASE_URL}/game?id=${gamesFiltred[randomIndex].id}`,
			{
				cache: "force-cache",
			},
		);
		const game = await responseGame.json();

		return { data: game, error: null, ok: true };
	} catch (error) {
		if (error instanceof NotFoundError) {
			return { data: null, error: error.toJSON(), ok: false };
		}

		return {
			data: null,
			error: new InternalServerError({ cause: error as Error }),
			ok: false,
		};
	}
}
