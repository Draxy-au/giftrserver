const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`../giftrClient/public/images/temp/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/images/${file.name}` });
  });
});

router.post("/new", async (req, res) => {
  const { tempFileName, newFileName } = req.body;

  tempfile = `../giftrClient/public/images/temp/${tempFileName}`;
  newfile = `../giftrClient/public/images/${newFileName}`;
  try {
    await fs.rename(tempfile, newfile, function (err) {
      if (err) throw err;
    });
    return res.status(200).json({msg: "image upated"});
  } catch (err) {
    console.log(err);
  }
});

router.post("/newd", async (req, res) => {
  const { newFileName } = req.body;

  tempfile = `../giftrClient/public/images/0.png`;
  newfile = `../giftrClient/public/images/${newFileName}`;
  try {
    await fs.copyFile(tempfile, newfile, function (err) {
      if (err) {
        console.log(err);
        throw err;
      }
      
    });
    return res.status(200).json({msg: "image upated"});
  } catch (err) {
    console.log(err);
  }
});

router.post("/old", async (req, res) => {
  const { tempFileName } = req.body;

  tempfile = `../giftrClient/public${tempFileName}`;
  console.log("temp file: ", tempfile);

  var resultHandler = function (err) {
    if (err) {
      console.log("unlink failed", err);
    } else {
      console.log("file deleted");
    }
  };

  try {
    fs.unlink(tempfile, resultHandler);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
  res.json({ msg: "deleted" });
});

module.exports = router;
