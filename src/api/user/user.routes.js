const express = require("express");

const User = require("./user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.query()
    .select('id', 'first_name', 'last_name', 'email', 'created_at', 'updated_at');
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/purchases/:id", (req, res) => {
  const {id} = req.params;
  User.relatedQuery("purchases").for(User.query().where({id: id}))
    .then(users => {
      res.json({users})
    })
});

router.get("/subscriptions/:id", (req, res) => {
  const {id} = req.params;
  User.relatedQuery("subscriptions").for(User.query().where({id: id}))
    .then(users => {
      res.json({users})
    })
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const user = await User.query().findById(id);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
