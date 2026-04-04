export default function handler(req, res) {
  const games = [
    {
      id: 1,
      name: "2048",
      url: "https://chaitanya13-hari.github.io/2048/",
      thumbnail: "https://games.washingtonpost.com/arenaxstorage-blob/arenax-games/TwoZeroFourEight/0.37/assets/thumbs/thumb2x.jpg"
    },
    {
      id: 2,
      name: "Snake Game",
      url: "https://chaitanya13-hari.github.io/snake/",
      thumbnail: "https://tse2.mm.bing.net/th/id/OIP.EGujGmjHsKBeLJFeYcPONgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
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

