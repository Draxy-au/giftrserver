const express = require("express");
const yup = require("yup");
const Listitem = require("./listitem.model");

const router = express.Router();

const yupListitemSchema = yup.object().shape({
  list_id: yup.number().required(),
  name: yup.string().required(),
  price: yup.number().required(),
  url: yup.string(),
  description: yup.string(),
  image_path: yup.string(),
  status: yup.string(),
});

const errorMessages = {
  listitemExists: "This Listitem already exists.",
};

router.get("/", async (req, res) => {
  try {
    const listitem = await Listitem.query().select();
    res.json(listitem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listitem = await Listitem.query().findById(id);
    res.json(listitem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const {
    list_id,
    name,
    price,
    url,
    description,
    image_path,
    status,
  } = req.body;
  try {
    const newListitem = {
      list_id,
      name,
      price,
      url: url ? url : "",
      description: description ? description : "",
      image_path: image_path ? image_path : "",
      status: status ? status : "",
    };

    await yupListitemSchema.validate(newListitem, {
      abortEarly: false,
    });

    const existingListitem = await Listitem.query()
      .where({ name })
      .where({ list_id })
      .first();
    if (existingListitem) {
      const error = new Error(errorMessages.listitemExists);
      res.status(403).json(error.message);
      throw error;
    }
    const listitem = await Listitem.query().insert(newListitem);
    res.json(listitem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    list_id,
    name,
    price,
    url,
    description,
    image_path,
    status,
  } = req.body;

  try {
    const updateListitem = {
      list_id,
      name,
      price,
      url: url ? url : "",
      description: description ? description : "",
      image_path: image_path ? image_path : "",
      status: status ? status : "",
    };

    await yupListitemSchema.validate(updateListitem, {
      abortEarly: false,
    });

    const listitem = await Listitem.query().patchAndFetchById(
      id,
      updateListitem
    );
    res.json(listitem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const listitemDeletedCount = await Listitem.query().deleteById(id);
    res.json(listitemDeletedCount);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
