const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

router.post("/register", async(req, res) => {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    const dbUser = await User.create(user);
    res.json(dbUser);
});

router.post("/login", async(req, res) => {
    const { email, password } = req.body;
    const dbUser = await User.findOne({ email });
    // res.json(dbUser);
    const isPasswordCorrect = await bcrypt.compare(password, dbUser.password);
    res.json(isPasswordCorrect);
});

module.exports = router;