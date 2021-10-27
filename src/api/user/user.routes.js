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

router.get("/purchases/:id", jwt.validateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.query()
      .withGraphFetched("purchases")
      .where({ id });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/purchases", jwt.validateToken, async (req, res) => {
  try {
    const users = await User.query().withGraphFetched("purchases");
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/subscriptions/:id", jwt.validateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.query()
      .withGraphFetched("subscriptions")
      .where({ id });
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/subscriptions", jwt.validateToken, async (req, res) => {
  try {
    const users = await User.query().withGraphFetched("subscriptions");
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", jwt.validateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.query().findById(id);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
