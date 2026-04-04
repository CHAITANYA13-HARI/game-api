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
      name: "Snake Game",
      url: "https://chaitanya13-hari.github.io/snake/",
      thumbnail: "https://via.placeholder.com/150?text=Tap"
    }
  ];

  const id = req.url.split("/").pop();

  if (id && !isNaN(id)) {
    const game = games.find(g => g.id == id);
    if (!game) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(game);
  }

  return res.status(200).json(games);
}
