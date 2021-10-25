const express = require("express");
const yup = require("yup");

const router = express.Router();

const yupUserSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .min(2)
    .required(),
  last_name: yup
    .string()
    .trim()
    .min(2)
    .required(),
  email: yup
    .string()
    .trim()
    .email()
    .required(),
  password: yup
    .string()
    .min(5)
    .max(100)
    .matches(/[^A-Za-z0-9]/, 'password must contain a special character')
    .matches(/[A-Z]/, 'password must contain an uppercase letter')
    .matches(/[a-z]/, 'password must contain a lowercase letter')
    .matches(/[0-9]/, 'password must contain a number')
    .required(),
});

router.post("/signin", async (req, res, next) => {
  const { email, first_name, last_name, password } = req.body;
  try {
    const createUser = {
      first_name,
      last_name,
      email,
      password
    }

    await yupUserSchema.validate(createUser, {
      abortEarly: false
    });
    res.json({
      message: 'OKAY'
    });
  } catch (err) {
    next(err);
  }
});

router.post("/login", (req, res, next) => {
  res.send("login");
});

module.exports = router;
