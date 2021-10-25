const express = require("express");
const yup = require("yup");
const bcrypt = require('bcrypt');

const jwt = require('../../lib/jwt');

const User = require('../user/user.model');

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
    .max(130)
    .matches(/[^A-Za-z0-9]/, 'password must contain a special character')
    .matches(/[A-Z]/, 'password must contain an uppercase letter')
    .matches(/[a-z]/, 'password must contain a lowercase letter')
    .matches(/[0-9]/, 'password must contain a number')
    .required(),
});

const errorMessages = {
  invalidLogin: 'Invalid Login.',
  emailInUse: 'That email is already registered.',
}

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
    const existingUser = await User.query().where({email}).first();
    if (existingUser) {
      const error = new Error(errorMessages.emailInUse);
      res.status(403).json(error.message);
      throw error;
    }
    
    // TODO: Get salt rounds from config
    const hashedPassword = await bcrypt.hash(password, 12)
    
    const insertedUser = await User.query().insert({
      first_name,
      last_name,
      email,
      password: hashedPassword
    });
    
    delete insertedUser.password;

    const payload = {
      id: insertedUser.id,
      first_name,
      last_name,
      email,
    };

    const token = await jwt.sign(payload);

    res.json({
      user: payload,
      token,
    });

  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    
    await yupUserSchema.validate({
      first_name: 'FirstName',
      last_name: 'Lastname',
      email,
      password,
    }, {
      abortEarly: false
    });

    const user = await User.query().where({email}).first();
    if (!user) {
      const error = new Error(errorMessages.invalidLogin);
      res.status(403).json(error.message);
      throw error;
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      const error = new Error(errorMessages.invalidLogin);
      res.status(403).json(error.message);
      throw error;
    }

    const payload = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email,
    };

    const token = await jwt.sign(payload);

    res.json({
      user: payload,
      token,
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;