const express = require("express");
const fs = require("fs");
const axios = require("axios");
const router = express.Router();
const { v4: uuid } = require("uuid");

videoId = uuid();
const readFile = (path) => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

const writeFile = (path, item) => {
  fs.writeFileSync(path, JSON.stringify(item, null, 2));
};

router.get("/", (req, res) => {
  const videoData = readFile("./data/videoData.json");
  const videoList = videoData.map((video) => ({
    id: video.id,
    title: video.title,
    image: video.image,
    channel: video.channel,
  }));
  res.status(200).json(videoList);
});

router.get("/:id", (req, res) => {
  const videoData = readFile("./data/videoData.json");

  const video = videoData.find((video) => video.id === req.params.id);
  console.log(video);

  if (!video) {
    return res.status(404).send("video not found ! ");
  }
  return res.status(200).json(video);
});

router.post("/", (req, res) => {
  if ((!req.body.title || !req.body.description, req.body.url)) {
    return res.status.apply(400).send("Please fill in all the requires fields");
  }
  const imageUrl = "https://i.imgur.com/l2Xfgpl.jpg";
  const newVideo = {
    title: req.body.title,
    channel: "Fadya",
    image: imageUrl,
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: new Date().getTime(),
    comments: [],
    id: videoId,
  };

  const vData = readFile("./data/videoData.json");
  vData.push(newVideo);
  writeFile("./data/videoData.json", vData);
  return res.status(201).send();
});

module.exports = router;
