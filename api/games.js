export default function handler(req, res) {
  const games = [
    {
      id: 1,
      name: "2048",
      url: "https://chaitanya13-hari.github.io/2048/",
      thumbnail: "https://via.placeholder.com/150?text=2048"
    },
    {
      id: 2,
      name: "Flappy Bird",
      url: "https://chaitanya13-hari.github.io/flappy/",
      thumbnail: "https://via.placeholder.com/150?text=Flappy"
    },
    {
      id: 3,
      name: "Tap Game",
      url: "https://chaitanya13-hari.github.io/tap/",
      thumbnail: "https://via.placeholder.com/150?text=Tap"
    }
  ];

  // GET /api/games
  if (req.url === "/api/games") {
    return res.status(200).json(games);
  }

  // GET /api/games/:id
  const match = req.url.match(/\/api\/games\/(\d+)/);
  if (match) {
    const game = games.find(g => g.id == match[1]);
    if (!game) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(game);
  }

  return res.status(200).send("API working 🚀");
}
