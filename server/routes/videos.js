const express = require("express");
const fs = require("fs");
const axios = require("axios");
const router = express.Router();
const { v4: uuid } = require("uuid");

const readFile = (path) => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

const writeFile = (gamesData) => {
  fs.writeFileSync("./data/games.json", JSON.stringify(gamesData, null, 2));
};

router.get("/", (req, res) => {
  let videoList = readFile("./data/videoList.json");
  console.log(videoList);
  res.status(200).send(videoList);
  res.send("ok");
});

// Updated
// MMOBOMB route
router.get("/", (req, res) => {
  const gamesData = readFile();
  const game = gamesData.find((game) => game.id === req.params.gameId);

  if (!game) {
    return res.status(404).send("Game not found");
  }

  return res.status(200).json(game);
});

router.get("/:id", (req, res) => {
  // Server can make a request to an API without CORS issues
  axios
    .get("https://www.mmobomb.com/api1/games")
    .then((response) => {
      const finalData = response.data.slice(0, 10).map((game) => {
        return {
          id: game.id,
          title: game.title,
          image: game.thumbnail,
          genres: [game.genre],
        };
      });
      res.status(200).json(finalData);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
