const express = require("express");

const User = require("./user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.query()
    .select('id', 'first_name', 'last_name', 'created_at', 'updated_at');
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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


// TODO: Remove this wen auth setup
router.post('/', async(req,res) => {
  try{
  const user = await User
    .query()
    .insert(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
