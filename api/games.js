export default function handler(req, res) {
  const games = [
    { id: 1, name: "2048" },
    { id: 2, name: "Flappy Bird" },
    { id: 3, name: "Tap Game" }
  ];

  // /api/games
  if (req.url === "/api/games") {
    return res.status(200).json(games);
  }

  // /api/games/1
  const match = req.url.match(/\/api\/games\/(\d+)/);
  if (match) {
    const game = games.find(g => g.id == match[1]);
    if (!game) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(game);
  }

  return res.status(200).send("API working 🚀");
}
