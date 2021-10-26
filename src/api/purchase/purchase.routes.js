const express = require("express");
const yup = require("yup");
const Purchase = require("./purchase.model");

const router = express.Router();

const yupPurchaseSchema = yup.object().shape({
  user_id: yup.number().required(),
  listitem_id: yup.number().required(),
});

const errorMessages = {
  purchaseExists: "User already purchased that item.",
};

router.get("/", async (req, res) => {
  try {
    const purchase = await Purchase.query().select();
    res.json(purchase);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchase.query().findById(id);
    res.json(purchase);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const { user_id, listitem_id } = req.body;
  try {
    const newPurchase = {
      user_id,
      listitem_id,
    };

    await yupPurchaseSchema.validate(newPurchase, {
      abortEarly: false,
    });

    const existingPurchase = await Purchase.query()
      .where({ user_id })
      .where({ listitem_id })
      .first();
    if (existingPurchase) {
      const error = new Error(errorMessages.purchaseExists);
      res.status(403).json(error.message);
      throw error;
    }
    const purchase = await Purchase.query().insert(newPurchase);
    res.json(purchase);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
