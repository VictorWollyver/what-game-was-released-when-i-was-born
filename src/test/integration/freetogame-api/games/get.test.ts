test("GET to https://www.freetogame.com/api/games should return a list of games", async () => {
	const response = await fetch("https://www.freetogame.com/api/games");
	const games = await response.json();
	expect(games).toBeInstanceOf(Array);
	expect(games.length).toBeGreaterThan(0);
	expect(games[0]).toHaveProperty("id");
	expect(games[0]).toHaveProperty("title");
	expect(games[0]).toHaveProperty("release_date");
	expect(response.status).toBe(200);
});
