const express = require("express");
const yup = require("yup");
const Category = require("./category.model");

const router = express.Router();

const yupCategorySchema = yup.object().shape({
  name: yup.string().trim().min(2).required(),
});

const errorMessages = {
  categoryExists: "This category already exists.",
};

router.get("/", async (req, res) => {
  try {
    const category = await Category.query().select();
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.query().findById(id);
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = {
      name: name,
    };

    await yupCategorySchema.validate(newCategory, {
      abortEarly: false,
    });

    const existingCategory = await Category.query().where({ name }).first();
    if (existingCategory) {
      const error = new Error(errorMessages.categoryExists);
      res.status(403).json(error.message);
      throw error;
    }
    const category = await Category.query().insert(newCategory);
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
