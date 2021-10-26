const express = require("express");
const yup = require("yup");
const List = require("./list.model");

const router = express.Router();

const yupListSchema = yup.object().shape({
  user_id: yup.number().required(),
  name: yup.string().required(),
  type: yup.string().required(),
  closing: yup.string().required(),
});

const errorMessages = {
  listExists: "This List already exists.",
};

router.get("/", async (req, res) => {
  try {
    const list = await List.query().withGraphFetched("user");
    res.json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/items", async (req, res) => {
  try {
    const list = await List.query().withGraphFetched("items");
    res.json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/items/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const list = await List.query().withGraphFetched("items").where({id});
    res.json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await List.query().findById(id);
    res.json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const { user_id, name, type, closing } = req.body;
  try {
    const newList = {
      user_id,
      name,
      type,
      closing,
    };

    await yupListSchema.validate(newList, {
      abortEarly: false,
    });

    const existingList = await List.query()
      .where({ user_id })
      .where({ name })
      .where({ type })
      .first();
    if (existingList) {
      const error = new Error(errorMessages.listExists);
      res.status(403).json(error.message);
      throw error;
    }
    const list = await List.query().insert(newList);
    res.json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id, name, type, closing } = req.body;
  try {
    const updateList = {
      user_id,
      name,
      type,
      closing,
    };

    await yupListSchema.validate(updateList, {
      abortEarly: false,
    });
    
    const list = await List.query().patchAndFetchById(id, updateList);
    res.json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
  
//   try {
//     const list = await List.query().findById(id);
//     const listitems = await list.$relatedQuery('')
//     res.json(listDeletedCount);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
