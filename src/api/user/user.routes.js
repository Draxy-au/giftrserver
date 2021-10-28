const express = require("express");

const User = require("./user.model");
const jwt = require('../../lib/jwt');
const router = express.Router();

router.get("/", jwt.validateToken, async (req, res) => {
  try {
    const users = await User.query().select(
      "id",
      "first_name",
      "last_name",
      "email",
      "created_at",
      "updated_at"
    );
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/purchases/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.query()
      .withGraphFetched("purchases")
      .where({ id });
    delete users[0].password;
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/purchases", jwt.validateToken, async (req, res) => {
  try {
    const users = await User.query().withGraphFetched("purchases");
    delete users[0].password
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/subscriptions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.query()
      .withGraphFetched("subscriptions")
      .where({ id });
    
      delete users[0].password;
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/subscriptions", jwt.validateToken, async (req, res) => {
  try {
    const users = await User.query().withGraphFetched("subscriptions");
    delete users[0].password;
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/lists/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.query().withGraphFetched("lists").where({ id });;
    delete users[0].password;
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id",async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.query().findById(id);
    delete user.password;
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
