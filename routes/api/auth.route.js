const router = require("express").Router();
const registerUser = require("../../controllers/auth/registerUser");
const loginUser = require("../../controllers/auth/loginUser");

router.post("/register", registerUser);
router.post("/login/user", loginUser);

module.exports = router;
