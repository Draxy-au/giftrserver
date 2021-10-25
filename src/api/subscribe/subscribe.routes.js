const express = require("express");
const yup = require("yup");
const Subscribe = require("./subscribe.model");

const router = express.Router();

const yupSubscribeSchema = yup.object().shape({
  user_id: yup
    .number()
    .required(),
  list_id: yup
    .number()
    .required()
});

const errorMessages = {
  subscribeExists: 'User already subscribed to that list.',
 
}

router.get("/", async (req, res) => {
  try {
    const subscribe = await Subscribe.query()
    .select();
    res.json(subscribe);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const subscribe = await Subscribe.query().findById(id);
    res.json(subscribe);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const {user_id, list_id} = req.body;
  try {
    const newSubscribe = {
      user_id,
      list_id,
    }

    await yupSubscribeSchema.validate(newSubscribe, {
      abortEarly: false
    });

    const existingSubscribe = await Subscribe
      .query()
      .where({user_id})
      .where({list_id})
      .first();
    if (existingSubscribe) {
      const error = new Error(errorMessages.subscribeExists);
      res.status(403).json(error.message);
      throw error;
    }
    const subscribe = await Subscribe
      .query()      
      .insert({
        user_id,
        list_id,
      });
    res.json(subscribe);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
