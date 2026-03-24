const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Your hosted games
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

// Get all games
app.get("/games", (req, res) => {
  res.json(games);
});

// Get single game
app.get("/games/:id", (req, res) => {
  const game = games.find(g => g.id == req.params.id);
  if (!game) return res.status(404).json({ error: "Game not found" });
  res.json(game);
});

// Optional: health check
app.get("/", (req, res) => {
  res.send("Game API running 🚀");
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});